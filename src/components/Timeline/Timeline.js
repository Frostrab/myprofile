import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiVuedotjs, SiReact } from "react-icons/si";

const Timeline = () => {

    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(243, 86, 86)', color: '#635656' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(243, 86, 86)' }}
                    date="Feb 2019 - Sep 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiReact />}
                >
                    <h3 className="vertical-timeline-element-title">Leader Planet</h3>
                    <h4 className="vertical-timeline-element-subtitle">Front-end</h4>
                    <p>
                        1.6 Year , React project
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep 2020 - Feb 2021"
                    contentStyle={{ background: 'rgb(235, 33, 33)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(235, 33, 33)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiReact />}
                >
                    <h3 className="vertical-timeline-element-title">Aware Corp</h3>
                    <h4 className="vertical-timeline-element-subtitle">Front-end</h4>
                    <p>
                        4 month , On-site True Digital Park , True-ID Article Website Editor
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2021 - current"
                    contentStyle={{ background: 'rgb(183, 242, 46)', color: '#635656' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(183, 242, 46)' }}
                    iconStyle={{ background: 'rgb(95, 181, 94)', color: '#fff' }}
                    icon={<SiVuedotjs />}
                >
                    <h3 className="vertical-timeline-element-title">CreativeMe</h3>
                    <h4 className="vertical-timeline-element-subtitle">Front-end</h4>
                    <p>
                        Current , VueJS Backoffice Project
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}
export default Timeline