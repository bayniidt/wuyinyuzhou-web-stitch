import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/images/首页/unnamed.png" 
          alt="Home Background" 
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/20 to-brand-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-9xl font-display text-white mb-4 tracking-wider">
            武印<span className="text-brand-red">视界</span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-brand-red to-transparent mb-8"
          />

          <p className="text-xl md:text-3xl tracking-[0.6em] text-gray-300 font-light mb-12 uppercase">
            东 方 武 道 沉 浸 式 盛 典
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 bg-brand-red text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span className="relative z-10 font-bold tracking-[0.2em]">预约观赛</span>
              <div className="absolute inset-0 shadow-glow-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 text-white hover:border-brand-red hover:text-brand-red transition-all duration-300"
            >
              <span className="font-bold tracking-[0.2em]">成为伙伴</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500">
        <span className="text-xs uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-brand-red to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
