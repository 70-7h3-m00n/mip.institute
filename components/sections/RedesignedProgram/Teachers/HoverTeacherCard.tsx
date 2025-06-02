import React from 'react'
import stls from './HoverTeacherCard.module.sass'
import PurpleStarIcon from './PurpleStarIcon'

interface Props {
  name: string
  role: string
  description: string[]
  experience: string
}

const HoverTeacherCard: React.FC<Props> = ({ name, role, description, experience }) => {
  return (
    <div className={stls.card}>
      <div>
        <p className={stls.name}>{name}</p>
        <p className={stls.role}>{role}</p>
        <ul className={stls.list}>
          {description.map((item, idx) => (
            <li key={idx}>
              <PurpleStarIcon className={stls.icon} />
              <span className={stls.text}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className={stls.experience}>{experience}</span>
    </div>
  )
}

export default HoverTeacherCard
