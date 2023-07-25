import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <div>
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
