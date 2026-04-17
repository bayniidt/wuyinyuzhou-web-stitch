import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../lib/constants';
import { MessageSquare, Share2, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-brand-red/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-6 h-6 bg-brand-red rotate-45 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold -rotate-45">武</span>
              </div>
              <span className="text-xl font-display tracking-widest text-white">武印视界</span>
            </Link>
            <p className="text-gray-500 text-xs tracking-widest leading-relaxed font-light mb-8">
               让每一个生命，都在寻找自己的印。<br />
               东方武道文化数字化全球门户。
            </p>
            <div className="flex gap-4">
              {[Share2, MessageSquare, Globe, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-400 hover:text-brand-red hover:border-brand-red transition-all duration-300">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-8">导航 / NAVIGATE</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-500 hover:text-white transition-colors text-sm tracking-widest uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-8">生态 / ECOSYSTEM</h4>
            <ul className="space-y-4">
              {['功夫印数字科技', '武印标准认证', '武印传媒', '印承天下文旅'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm tracking-widest uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Col */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-8">联系我们 / CONTACT</h4>
            <div className="space-y-4 text-gray-500 text-sm tracking-widest">
              <p>📍 中国 · 杭州 ·滨江区</p>
              <p>📧 contact@wuyingezhou.com</p>
              <p>📞 +86 0571-XXXXXXXX</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] tracking-widest">
            © 2026 武印视界 · 武印阁生态体系 版权所有.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 tracking-widest">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">用户协议</a>
            <a href="#" className="hover:text-white">浙ICP备XXXXXXXX号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
