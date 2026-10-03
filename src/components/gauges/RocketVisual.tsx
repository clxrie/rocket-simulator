type Props = { burning: boolean }

function Flame({ left, big }: { left: string; big?: boolean }) {
  const w = big ? 18 : 12
  return (
    <div
      className="flame absolute top-full"
      style={{
        left,
        marginLeft: -w / 2,
        width: w,
        height: big ? 70 : 50,
        background: 'linear-gradient(to bottom, #fff 0%, #ffd54a 30%, #ff7a1a 70%, transparent 100%)',
        borderRadius: '0 0 50% 50%',
        filter: 'blur(1px)',
      }}
    />
  )
}

export default function RocketVisual({ burning }: Props) {
  return (
    <div className="relative">
      <img src="/rocket.png" alt="Rocket" className="h-[440px] w-auto opacity-90" />
      {burning && (
        <>
          <Flame left="50%" big />
          <Flame left="14%" />
          <Flame left="86%" />
        </>
      )}
    </div>
  )
}