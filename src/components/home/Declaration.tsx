import { motion } from 'framer-motion';

const Declaration = () => {
  return (
    <section className="relative py-48 px-4 bg-brand-black overflow-hidden">
      {/* Background Zen Pattern or Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <span className="inline-block text-brand-red text-sm tracking-[0.5em] mb-12 font-bold uppercase">
             Wuyin Vision · 武印宣言
          </span>
          
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-light text-white leading-tight">
              “ 每一个生命，<br />
              <span className="ml-12 md:ml-32">都在寻找自己的<span className="text-brand-red font-display italic">印</span> ”</span>
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 pt-20">
              {['见自己', '见众生', '见天地'].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group cursor-default"
                >
                  <span className="text-3xl md:text-4xl font-display text-gray-400 group-hover:text-white transition-colors duration-500 tracking-widest">
                    {text}
                  </span>
                  <div className="mt-4 w-1 h-1 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-glow-red"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Declaration;
