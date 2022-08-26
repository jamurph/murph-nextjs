import style from '../../styles/scss/components/timeline/TimelineItem.module.scss'

export default function TimelineItem({children}) {
    return (
        <div className={`${style.timelineItem}`}>
            <div className={style.timelineLineContainer}>
                <div className={style.timelineLineCircle}></div>
                <div className={style.timelineLine}></div>
            </div>
            <div className={style.timelineItemContentContainer}>
                <div className={style.timelineItemContent}>
                    {children}
                </div>
            </div>
        </div>
    )
  }