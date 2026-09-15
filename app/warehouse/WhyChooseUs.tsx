"use client";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
    <section className="my-10 overflow-hidden px-4 lg:my-20 lg:px-8">
      <h1 className="font-manrope text-[20px] font-bold text-white lg:text-4xl">
        Why Choose
        <span className="text-yellow-200">Our Warehousing Services?</span>
      </h1>
      <div className="mt-4 lg:mt-8 h-0.5 w-24 bg-yellow-400 lg:w-32"></div>
      {/* card-box */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-4 mt-3 lg:mt-6">
        {/* card-1 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" group relative flex flex-col items-start overflow-hidden rounded-lg border border-white/10 bg-[#161000]/35 p-3 text-white backdrop-blur-xl  shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-all duration-500 hover:border-[#FFBB00]/40 hover:bg-[#201700]/50 hover:shadow-[0_12px_40px_rgba(255,187,0,0.12)] lg:p-4"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFBB00]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M9.5625 22.3125H3.1875C2.01556 22.3125 1.0625 21.3595 1.0625 20.1875V13.8125C1.0625 12.6406 2.01556 11.6875 3.1875 11.6875H9.5625C10.7344 11.6875 11.6875 12.6406 11.6875 13.8125V20.1875C11.6875 21.3595 10.7344 22.3125 9.5625 22.3125ZM3.1875 13.8125V20.1875H9.5625V13.8125H3.1875ZM17 31.875C16.6154 31.875 16.2343 31.8609 15.8567 31.8325C11.2327 31.4798 6.97425 28.9298 4.46356 25.0113L6.25388 23.8638C7.3208 25.5251 8.7572 26.9174 10.451 27.932C12.1447 28.9466 14.0501 29.5561 16.0183 29.7128C16.342 29.7376 16.6692 29.75 17 29.75V31.875ZM24.4375 31.875L22.2062 30.8125C20.4 29.9625 19.125 28.05 19.125 26.0313V19.125H29.75V26.0313C29.75 28.05 28.5813 29.9625 26.6688 30.8125L24.4375 31.875ZM21.25 21.25V26.0313C21.25 27.3063 21.9938 28.3688 23.0563 28.9L24.4375 29.5375L25.8187 28.9C26.8812 28.3688 27.625 27.2 27.625 26.0313V21.25H21.25ZM29.0094 12.75C29.4907 14.1122 29.75 15.5348 29.75 17H31.875C31.875 15.5444 31.6636 14.1228 31.2545 12.75H29.0094ZM28.6875 10.625H25.5C24.3281 10.625 23.375 9.67197 23.375 8.50003V5.31253C23.375 4.1406 24.3281 3.18753 25.5 3.18753H28.6875C29.8594 3.18753 30.8125 4.1406 30.8125 5.31253V8.50003C30.8125 9.67197 29.8594 10.625 28.6875 10.625ZM25.5 5.31253V8.50003H28.6875V5.31253H25.5ZM21.25 2.74553C19.8708 2.33419 18.4392 2.12517 17 2.12503C14.5014 2.11979 12.042 2.74628 9.85042 3.94629C7.65883 5.14629 5.80617 6.88086 4.46463 8.98878L6.25388 10.1363C7.80033 7.70604 10.1266 5.87332 12.8513 4.93858C15.5759 4.00384 18.5374 4.02256 21.25 4.99166V2.74553Z"
                fill="white"
              />
            </svg>
          </div>

          <h3 className="relative z-10 my-2 text-base text-yellow-400 font-semibold lg:my-3 lg:text-xl">
            Growth Opportunities
          </h3>

          <p className="relative z-10  text-[14px] text-gray-400 lg:text-base">
            We invest in your growth and help you build a successful career.
          </p>
        </motion.div>
        {/* card-2 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" group relative flex flex-col items-start overflow-hidden rounded-lg border border-white/10 bg-[#161000]/35 p-3 text-white backdrop-blur-xl  shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-all duration-500 hover:border-[#FFBB00]/40 hover:bg-[#201700]/50 hover:shadow-[0_12px_40px_rgba(255,187,0,0.12)] lg:p-4"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFBB00]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M31.3777 13.6797H22.8777C22.7316 13.6797 22.6121 13.7992 22.6121 13.9453V15.5391C22.6121 15.6852 22.7316 15.8047 22.8777 15.8047H31.3777C31.5238 15.8047 31.6434 15.6852 31.6434 15.5391V13.9453C31.6434 13.7992 31.5238 13.6797 31.3777 13.6797ZM26.9285 18.1953H22.8777C22.7316 18.1953 22.6121 18.3148 22.6121 18.4609V20.0547C22.6121 20.2008 22.7316 20.3203 22.8777 20.3203H26.9285C27.0746 20.3203 27.1941 20.2008 27.1941 20.0547V18.4609C27.1941 18.3148 27.0746 18.1953 26.9285 18.1953ZM15.8486 10.708H14.4109C14.2051 10.708 14.0391 10.874 14.0391 11.0799V19.3143C14.0391 19.4338 14.0955 19.5434 14.1918 19.6131L19.1357 23.2189C19.3018 23.3385 19.5342 23.3053 19.6537 23.1393L20.507 21.9738V21.9705C20.6266 21.8045 20.59 21.5721 20.424 21.4525L16.2172 18.4111V11.0799C16.2205 10.874 16.0512 10.708 15.8486 10.708Z"
                fill="white"
              />
              <path
                d="M26.7219 22.3755H24.8028C24.6168 22.3755 24.4408 22.4718 24.3412 22.6311C23.9196 23.2985 23.4281 23.9161 22.8637 24.4806C21.8908 25.4534 20.7586 26.2171 19.5002 26.7483C18.1953 27.2995 16.8108 27.5784 15.383 27.5784C13.952 27.5784 12.5674 27.2995 11.2658 26.7483C10.0074 26.2171 8.87522 25.4534 7.90237 24.4806C6.92951 23.5077 6.16584 22.3755 5.63459 21.1171C5.08342 19.8155 4.80451 18.4309 4.80451 16.9999C4.80451 15.5688 5.08342 14.1876 5.63459 12.8827C6.16584 11.6243 6.92951 10.4921 7.90237 9.51923C8.87522 8.54637 10.0074 7.7827 11.2658 7.25145C12.5674 6.70028 13.9553 6.42137 15.383 6.42137C16.8141 6.42137 18.1987 6.70028 19.5002 7.25145C20.7586 7.7827 21.8908 8.54637 22.8637 9.51923C23.4281 10.0837 23.9196 10.7013 24.3412 11.3686C24.4408 11.528 24.6168 11.6243 24.8028 11.6243H26.7219C26.951 11.6243 27.0971 11.3852 26.9942 11.1827C24.8293 6.87626 20.4399 4.07723 15.5391 4.02079C8.36389 3.93114 2.40393 9.80477 2.39065 16.9733C2.37737 24.1552 8.19787 29.9823 15.3797 29.9823C20.3436 29.9823 24.8061 27.1733 26.9942 22.8171C27.0971 22.6145 26.9477 22.3755 26.7219 22.3755Z"
                fill="white"
              />
            </svg>
          </div>

          <h3 className="relative z-10 my-2 text-base text-yellow-400 font-semibold lg:my-3 lg:text-xl">
            Real-time Visibility
          </h3>

          <p className="relative z-10  text-[14px] text-gray-400 lg:text-base">
            End-to-end visibility of your inventory with accurate reporting &
            updates.
          </p>
        </motion.div>
        {/* card-3 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" group relative flex flex-col items-start overflow-hidden rounded-lg border border-white/10 bg-[#161000]/35 p-3 text-white backdrop-blur-xl  shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-all duration-500 hover:border-[#FFBB00]/40 hover:bg-[#201700]/50 hover:shadow-[0_12px_40px_rgba(255,187,0,0.12)] lg:p-4"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFBB00]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M17 2.83325C20.5417 2.83325 23.8241 3.61809 26.5044 4.95117C27.8191 5.60567 28.475 5.93292 29.1125 6.96142C29.75 7.98992 29.75 8.98442 29.75 10.9763V15.919C29.75 23.9699 23.3141 28.4466 19.5882 30.3648L19.5798 30.3691C18.5456 30.9003 18.0271 31.1666 17 31.1666C15.9729 31.1666 15.4544 30.9003 14.4202 30.3691L14.4117 30.3648C10.6845 28.4466 4.25 23.9713 4.25 15.9204V10.9763C4.25 8.98442 4.25142 7.98992 4.8875 6.96142C5.52358 5.93292 6.18092 5.60567 7.49558 4.95117C10.1773 3.61809 13.4583 2.83325 17 2.83325Z"
                stroke="white"
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.166 14.1666V12.0416C14.166 11.2901 14.4645 10.5695 14.9959 10.0381C15.5272 9.50676 16.2479 9.20825 16.9993 9.20825C17.7508 9.20825 18.4715 9.50676 19.0028 10.0381C19.5342 10.5695 19.8327 11.2901 19.8327 12.0416V14.1666M14.166 14.1666H19.8327M14.166 14.1666C13.6024 14.1666 13.0619 14.3905 12.6634 14.789C12.2649 15.1875 12.041 15.728 12.041 16.2916V18.4166C12.041 18.9802 12.2649 19.5207 12.6634 19.9192C13.0619 20.3177 13.6024 20.5416 14.166 20.5416H19.8327C20.3963 20.5416 20.9368 20.3177 21.3353 19.9192C21.7338 19.5207 21.9577 18.9802 21.9577 18.4166V16.2916C21.9577 15.728 21.7338 15.1875 21.3353 14.789C20.9368 14.3905 20.3963 14.1666 19.8327 14.1666"
                stroke="white"
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="relative z-10 my-2 text-base text-yellow-400 font-semibold lg:my-3 lg:text-xl">
            Advanced Security
          </h3>

          <p className="relative z-10  text-[14px] text-gray-400 lg:text-base">
            24/7 surveillance, access control, and safety measures to ensure
            complete security.
          </p>
        </motion.div>
        {/* card-4 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" group relative flex flex-col items-start overflow-hidden rounded-lg border border-white/10 bg-[#161000]/35 p-3 text-white backdrop-blur-xl  shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-all duration-500 hover:border-[#FFBB00]/40 hover:bg-[#201700]/50 hover:shadow-[0_12px_40px_rgba(255,187,0,0.12)] lg:p-4"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFBB00]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M24.0827 19.8334C24.4584 19.8334 24.8187 19.9827 25.0844 20.2483C25.3501 20.514 25.4993 20.8744 25.4993 21.2501V24.9136L26.6228 23.7902C26.7534 23.6549 26.9098 23.5469 27.0826 23.4727C27.2554 23.3984 27.4413 23.3594 27.6294 23.3577C27.8176 23.3561 28.0041 23.3919 28.1782 23.4632C28.3523 23.5344 28.5105 23.6396 28.6435 23.7726C28.7765 23.9056 28.8817 24.0638 28.9529 24.2379C29.0242 24.412 29.06 24.5985 29.0584 24.7867C29.0567 24.9748 29.0177 25.1607 28.9434 25.3335C28.8692 25.5063 28.7612 25.6627 28.6259 25.7933L25.0843 29.335C24.8186 29.6006 24.4583 29.7498 24.0827 29.7498C23.707 29.7498 23.3468 29.6006 23.0811 29.335L19.5394 25.7933C19.2814 25.5261 19.1386 25.1683 19.1418 24.7968C19.145 24.4254 19.294 24.0701 19.5567 23.8074C19.8194 23.5448 20.1747 23.3958 20.5461 23.3925C20.9176 23.3893 21.2754 23.5321 21.5426 23.7902L22.666 24.9136V21.2501C22.666 20.8744 22.8153 20.514 23.0809 20.2483C23.3466 19.9827 23.707 19.8334 24.0827 19.8334ZM15.5827 5.66675C15.9584 5.66675 16.3187 5.81601 16.5844 6.08168C16.8501 6.34736 16.9993 6.70769 16.9993 7.08342C16.9993 7.45914 16.8501 7.81948 16.5844 8.08515C16.3187 8.35083 15.9584 8.50008 15.5827 8.50008H9.20768C9.01982 8.50008 8.83965 8.57471 8.70682 8.70755C8.57398 8.84039 8.49935 9.02056 8.49935 9.20842V24.7917C8.49935 24.9796 8.57398 25.1598 8.70682 25.2926C8.83965 25.4255 9.01982 25.5001 9.20768 25.5001H15.5827C15.9584 25.5001 16.3187 25.6493 16.5844 25.915C16.8501 26.1807 16.9993 26.541 16.9993 26.9167C16.9993 27.2925 16.8501 27.6528 16.5844 27.9185C16.3187 28.1842 15.9584 28.3334 15.5827 28.3334H9.20768C8.26837 28.3334 7.36754 27.9603 6.70335 27.2961C6.03915 26.6319 5.66602 25.7311 5.66602 24.7917V9.20842C5.66602 8.26911 6.03915 7.36827 6.70335 6.70408C7.36754 6.03989 8.26837 5.66675 9.20768 5.66675H15.5827ZM23.1902 4.56883C23.462 4.34792 23.8059 4.2355 24.1557 4.25329C24.5055 4.27109 24.8363 4.41782 25.0843 4.66517L28.6259 8.20683C28.884 8.47402 29.0268 8.83187 29.0236 9.20332C29.0203 9.57476 28.8713 9.93008 28.6087 10.1927C28.346 10.4554 27.9907 10.6044 27.6192 10.6076C27.2478 10.6109 26.8899 10.4681 26.6228 10.21L25.4993 9.08658V12.7501C25.4993 13.1258 25.3501 13.4861 25.0844 13.7518C24.8187 14.0175 24.4584 14.1668 24.0827 14.1668C23.707 14.1668 23.3466 14.0175 23.0809 13.7518C22.8153 13.4861 22.666 13.1258 22.666 12.7501V9.08658L21.5426 10.21C21.2754 10.4681 20.9176 10.6109 20.5461 10.6076C20.1747 10.6044 19.8194 10.4554 19.5567 10.1927C19.294 9.93008 19.145 9.57476 19.1418 9.20332C19.1386 8.83187 19.2814 8.47402 19.5394 8.20683L23.0811 4.66517L23.1902 4.56883Z"
                fill="white"
              />
            </svg>
          </div>

          <h3 className="relative z-10 my-2 text-base text-yellow-400 font-semibold lg:my-3 lg:text-xl">
            Scalability
          </h3>

          <p className="relative z-10  text-[14px] text-gray-400 lg:text-base">
            Flexible space and resources to scale with your business growth.
          </p>
        </motion.div>
        {/* card-5 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" group relative flex flex-col items-start overflow-hidden rounded-lg border border-white/10 bg-[#161000]/35 p-3 text-white backdrop-blur-xl  shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition-all duration-500 hover:border-[#FFBB00]/40 hover:bg-[#201700]/50 hover:shadow-[0_12px_40px_rgba(255,187,0,0.12)] lg:p-4"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFBB00]/20 blur-3xl" />

          {/* Icon */}
          <div className="relative z-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <h3 className="relative z-10 my-2 text-base text-yellow-400 font-semibold lg:my-3 lg:text-xl">
            Strategic Locations
          </h3>

          <p className="relative z-10  text-[14px] text-gray-400 lg:text-base">
            Warehouses located at key hubs for faster distribution and reduced
            transit time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
