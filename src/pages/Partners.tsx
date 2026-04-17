import { motion } from 'framer-motion';
import { CONTACT_OPTIONS } from '../lib/constants';
import { CheckCircle2 } from 'lucide-react';

const Partners = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-24 pb-32">
      {/* Header */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <h1 className="text-4xl md:text-7xl font-display tracking-widest uppercase mb-6">合作入口</h1>
            <p className="text-gray-500 tracking-[0.4em] uppercase text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
               武印视界诚邀各界伙伴共同构建东方武道元宇宙生态，开启传统文化与未来科技的融合之旅。
            </p>
         </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
         {/* Categories List */}
         <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-brand-red mb-10 flex items-center gap-4">
               <span className="w-10 h-px bg-brand-red"></span>
               合作领域 / FIELDS
            </h2>
            
            {CONTACT_OPTIONS.map((opt, i) => (
               <motion.div 
                  key={opt.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-white/5 bg-zinc-950/50 hover:border-brand-red/30 transition-all group"
               >
                  <h3 className="text-xl font-display text-white mb-3 tracking-widest">{opt.label}</h3>
                  <p className="text-gray-500 text-sm font-light">{opt.description}</p>
               </motion.div>
            ))}
         </div>

         {/* Application Form */}
         <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-zinc-900 border border-white/5 p-10 md:p-16 relative overflow-hidden"
            >
               {/* Decorative Background Text */}
               <div className="absolute top-10 right-10 text-brand-red/5 font-display text-9xl pointer-events-none rotate-12">合作</div>
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-display text-white mb-10 tracking-widest">申请合作印记</h2>
                  
                  <form className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">基本信息 / INFORMATION</label>
                           <input type="text" placeholder="您的姓名 / 机构名称" className="w-full bg-brand-black border-b border-white/10 p-4 focus:border-brand-red transition-colors outline-none text-sm tracking-widest" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">联系方式 / CONTACT</label>
                           <input type="text" placeholder="手机号 / 邮箱" className="w-full bg-brand-black border-b border-white/10 p-4 focus:border-brand-red transition-colors outline-none text-sm tracking-widest" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">意向类型 / TYPE</label>
                        <select className="w-full bg-brand-black border-b border-white/10 p-4 focus:border-brand-red transition-colors outline-none text-sm tracking-widest appearance-none cursor-pointer">
                           {CONTACT_OPTIONS.map(opt => (
                              <option key={opt.id} value={opt.id} className="bg-brand-black">{opt.label}</option>
                           ))}
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">合作背景说明 / BACKGROUND</label>
                        <textarea rows={4} placeholder="请简要描述您的资源优势及具体合作意向..." className="w-full bg-brand-black border-b border-white/10 p-4 focus:border-brand-red transition-colors outline-none text-sm tracking-widest resize-none"></textarea>
                     </div>

                     <div className="pt-8">
                        <motion.button 
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           type="button"
                           className="group w-full py-5 bg-brand-red text-white flex items-center justify-center gap-4 text-sm font-bold tracking-[0.4em] relative overflow-hidden"
                        >
                           <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"></div>
                           <span className="relative z-10">提交申请 · 开启征程</span>
                           <CheckCircle2 className="relative z-10 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                     </div>
                  </form>
               </div>
            </motion.div>
         </div>
      </div>
    </div>
  );
};

export default Partners;
