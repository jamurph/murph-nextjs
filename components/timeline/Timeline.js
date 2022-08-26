import style from '../../styles/scss/components/timeline/Timeline.module.scss'

export default function Timeline({children}) {
    return (
        <div className={`${style.timeline} my-5`}>
            {children}
        </div>
    )
  }