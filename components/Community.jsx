  "use client";

  import { Send, MessagesSquare, Copy, Trash } from "lucide-react";
  import { useClerk, useAuth } from "@clerk/nextjs";
  import { toast } from "react-hot-toast";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { withSwal } from "react-sweetalert2";
  import { slideIn } from "../utils/motion";
  import { motion } from "framer-motion";
  import Link from "next/link";

  const Community = ({ swal }) => {
    //timer
    // Load initial state from localStorage or set to default
    const [messageCount, setMessageCount] = useState(
      parseInt(localStorage.getItem("messageCount")) || 0
    );
    const [timer, setTimer] = useState(
      parseInt(localStorage.getItem("timer")) || 0
    );

    // Update localStorage when messageCount or timer changes
    useEffect(() => {
      localStorage.setItem("messageCount", messageCount);
      localStorage.setItem("timer", timer);
    }, [messageCount, timer]);

    useEffect(() => {
      let interval;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prev) => {
            const newTime = prev - 1;
            localStorage.setItem("timer", newTime.toString()); // Update localStorage
            return newTime;
          });
        }, 1000);
      } else if (timer === 0 && messageCount > 0) {
        setMessageCount(0); // Reset message count after 1 minute
        localStorage.setItem("messageCount", "0"); // Reset localStorage
      }
      return () => clearInterval(interval);
    }, [timer]);

    //! POST
    const getCurrentDate = (date) => {
      if (!date) {
        // If date is undefined, return the current date
        date = new Date();
      }

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const clerk = useClerk();
    const userId = clerk.user ? clerk.user.id : null;
    const profileImg = clerk.user ? clerk.user.imageUrl : null;
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());
    const { isSignedIn } = useAuth();

    const handleCommunity = async (e) => {
      e.preventDefault();
      if (messageCount < 2) {
        // Increment message count right away
        setMessageCount((prevCount) => {
          if (prevCount < 2) {
            if (prevCount === 0) {
              setTimer(60); // Start the timer when the first message is sent
            }
            return prevCount + 1; // Increase the message count
          }
          return prevCount; // Return the previous count if 2 messages have already been sent
        });

        try {
          // existing logic for posting message
          const data = {
            text: text,
            date: selectedDate,
            userId,
            profileImg,
            name: clerk.user.firstName,
          };

          setLoading(true);

          const res = await axios.post("/api/community", data);

          const refreshPage = () => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          };

          if (res) {
            toast.success("Poslané!");
            refreshPage();
          } else {
            throw new Error("Error");
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to send message.");
        } finally {
          setLoading(false); // Ensure loading is false after operation
        }
      } else {
        toast.error("Možeš poslať iba 2 správy za minútu.");
      }
    };

    //!GET
    const [comm, setComm] = useState([]);
    const [commLoading, setCommLoading] = useState(false);

    useEffect(() => {
      const fetchPrayers = async () => {
        try {
          setCommLoading(true);
          const response = await axios.get("api/community");
          setComm(response.data.Comm);
          setCommLoading(false);
        } catch (error) {
          console.error("Failed to fetch community", error);
          setComm([]);
          setCommLoading(false);
        }
      };

      if (userId) {
        fetchPrayers();
      }
    }, [userId]);

    //delete message ,copy message

    const handleCopyText = (text) => {
      toast.success("Skopirované!");
      navigator.clipboard.writeText(text);
    };

    const handleDelete = (id) => {
      swal
        .fire({
          title: "Chceš vymazať túto správu?",
          type: "warning",
          showCancelButton: true,
          cancelButtonText: "Nie, nechcem",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Áno, vymazať",
          reverseButtons: true,
        })
        .then(function (result) {
          if (result.isConfirmed) {
            axios.delete(`/api/community?id=${id}`).then(() => {
              toast.success("Zmazané!");
              axios.get("/api/community").then((response) => {
                setCommLoading(true);
                setComm(response.data.Comm);
                setCommLoading(false);
                window.location.href = `${window.location.origin}/`;
              });
            });
          }
        });
    };

    return (
      <div className="pt-20 pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-[var(--color2)] text-center mt-10 flex justify-center items-center flex-col gap-3"
        >
          <h1 className=" text-4xl underline">Komunita</h1>

          <div className="bg-white sm:w-[500px] sm:h-[500px] w-[275px]   my-2 rounded-lg mx-1 border  border-[#0c6a3c] ">
            <div className="flex bg-white text-[#0c6a3c] rounded-lg py-2 justify-center items-center">
              <p className="mr-2">Podporme spoločne FC Bäni!</p>
              <MessagesSquare />
            </div>

            <div className=" py-4 flex flex-col  gap-4 sm:max-h-[460px] max-h-[350px]  overflow-y-auto">
              {commLoading ? (
                <p className="text-center">Loading...</p>
              ) : comm.length > 0 ? (
                comm.map((i) => (
                  <div
                    key={i._id}
                    className={`flex mx-2 ${
                      i.userId === userId ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span className=" bg-[#0c6a3c] p-2 rounded-2xl  ">
                      {i.userId === userId ? (
                        <div className="flex justify-left items-start gap-1 relative">
                          <Copy
                            onClick={() => handleCopyText(i.text)}
                            size={15}
                            className="cursor-pointer absolute left-0 top-0 text-white"
                          />
                          <Trash
                            onClick={() => handleDelete(i._id)}
                            size={15}
                            className="cursor-pointer absolute left-0 top-5 text-red-500"
                          />

                          <h1 className="pl-[18px] text-white">
                            {i.text} - {i.name}
                          </h1>
                          <img
                            className="w-10 rounded-full"
                            src={i.profileImg}
                            alt="profile picture of user"
                          />
                        </div>
                      ) : (
                        <div className="flex justify-left items-start gap-1 relative">
                          <img
                            className="w-10 rounded-full "
                            src={i.profileImg}
                            alt="profile picture of user"
                          />
                          <h1 className="text-white pr-[18px]">
                            {i.name} - {i.text}
                          </h1>

                          <Copy
                            onClick={() => handleCopyText(i.text)}
                            size={15}
                            className="cursor-pointer absolute right-0 top-0 text-white"
                          />
                        </div>
                      )}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center">
                  {isSignedIn ? (
                    "Začnite konverzáciu ako pravý fanušik! "
                  ) : (
                    <Link href={"sign-up"} className="underline">
                      Pre zobrazenie správ sa prihláste.
                    </Link>
                  )}
                </p>
              )}
            </div>
          </div>
          {messageCount >= 2 && (
            <p className="text-center text-red-500">Počkaj {timer} sekúnd.</p>
          )}

          <form onSubmit={(e) => handleCommunity(e)} className="flex gap-3">
            <input
              id="shop"
              type="text"
              autocomplete="off"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Send a message"
              className="bg-transparent border-t-transparent border-x-transparent  outline-none  border p-1"
            />
            {isSignedIn ? (
              true && (
                <button>
                  <Send
                    size={52}
                    className="bg-[var(--color2)] text-black p-1 rounded-2xl cursor"
                  />
                </button>
              )
            ) : (
              <Link href={"/sign-up"}>
                <Send
                  size={52}
                  className="bg-[var(--color2)] text-black  p-1 rounded-2xl cursor"
                />
              </Link>
            )}
          </form>
          {loading == true ? "Sending.." : ""}
        </motion.div>
      </div>
    );
  };

  export default withSwal(Community);
