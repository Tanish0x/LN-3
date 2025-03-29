import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Instagram, Disc as Discord, Rocket, Timer } from 'lucide-react';
import { GradientText } from '../components/GradientText';
import { GradientButton } from '../components/GradientButton';

function Home() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleSubmitClick = () => {
  window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe8gFS1Kl9j-klJFVV9RugqY9rMJoQDPiRLD-14jvemSaUWxA/viewform?usp=dialog';
};

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-violet-900/20" />
      <motion.div
        className="fixed inset-0"
        animate={{
          background: [
            'radial-gradient(600px circle at 0% 0%, rgba(129, 140, 248, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 100% 0%, rgba(139, 92, 246, 0.1), transparent 80%)',
            'radial-gradient(600px circle at 0% 100%, rgba(167, 139, 250, 0.1), transparent 80%)',
          ],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text"
            >
              LearnNeural
            </motion.h1>

            <GradientText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 block">
              Hackathon 2025
            </GradientText>

            <motion.div
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-violet-500/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Timer className="w-8 h-8 text-violet-400 animate-pulse" />
                <h2 className="text-2xl font-bold text-violet-400">Project Submission Time!</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <Rocket className="w-6 h-6 text-violet-400 mx-auto mb-4" />
                  <p className="text-violet-200 text-lg mb-4">
                    Dear amazing developers, the moment has arrived! 🚀
                  </p>
                  <p className="text-violet-200 mb-4">
                    We've witnessed your dedication, creativity, and passion throughout this journey.
                    Now it's time to showcase your incredible projects to the world!
                  </p>
                  <p className="text-violet-200 mb-6">
                    Best of luck to all teams! May your code be bug-free and your demos be flawless! ✨
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a 
    href="https://docs.google.com/forms/d/e/1FAIpQLSe8gFS1Kl9j-klJFVV9RugqY9rMJoQDPiRLD-14jvemSaUWxA/viewform?usp=dialog" 
    className="w-full sm:w-auto"
  >
    <GradientButton className="w-full">
      Submit Your Project →
    </GradientButton>
  </a>
</div>

                  <Link to="/registered" className="w-full sm:w-auto">
                    <GradientButton className="w-full">
                      View All Teams
                    </GradientButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <footer className="py-8 text-center">
          <GradientText className="text-xl sm:text-2xl font-bold">
            LearnNeural
          </GradientText>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { href: "https://github.com/learnneural", icon: Github },
              { href: "https://instagram.com/learnneural", icon: Instagram },
              { href: "https://discord.gg/learnneural", icon: Discord }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                className="text-violet-400 hover:text-violet-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
