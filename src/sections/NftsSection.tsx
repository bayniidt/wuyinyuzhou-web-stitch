import GradientButton from "@/components/ui/GradientButton";

export default function NftsSection() {
  return (
    <section id="nfts" className="border-b border-white/5 py-20 sm:py-24">
      <div className="container-wuyin flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">NFTs & Artifacts</h2>
        <p className="mt-4 max-w-2xl text-sm text-wuyin-muted sm:text-base">
          数字印信与道场合约将承载身份、荣誉与参与记录。首版站点为静态展示，链上功能上线后将在此区域衔接钱包与铸造流程。
        </p>
        <GradientButton className="mt-8" type="button">
          预约首发通知
        </GradientButton>
      </div>
    </section>
  );
}
