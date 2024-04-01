import type { FC } from "react"

interface CardProps {
  item: {
    icon: any
    title: string
    description?: string
  }
}

const Card: FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-cardBg group p-5 rounded-2xl transition-all h-full cursor-default z-auto hover:bg-brand/50">
      <div className="bg-background flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg transition-all group-hover:bg-orange group-hover:text-brand">
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-4">{item.title}</h3>
      {item.description && (
        <p className="text-lg text-blueBlack">{item.description}</p>
      )}
    </div>
  )
}

export default Card
