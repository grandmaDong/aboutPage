import React, { Component } from "react";
import { Card, Calendar, Badge } from 'antd'
import 'antd/es/card/style/css';
import 'antd/es/calendar/style/css'
import 'antd/es/badge/style/css'
import * as moment from "moment";

interface Lesson {
    id: string,
    name: string,
    isSelected: boolean
}
interface RangeCell {
    id: string;
    content: string;
    type: "default" | "success" | "warning" | "processing" | "error" | undefined;
}
interface Props {}
interface State {
    lessonList: Lesson[]
}
export class SkuSchedules extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
            lessonList: [
                {
                  id: '0',
                  name: 'L1',
                  isSelected: false
                },
                {
                  id: '1',
                  name: 'L2',
                  isSelected: false
                },
                {
                  id: '2',
                  name: 'L3',
                  isSelected: false
                },
                {
                  id: '3',
                  name: 'L4',
                  isSelected: false
                }
              ]
        }
    }

    componentWillMount () {
        console.log('will mount')
    }

    selectLesson = (id: string) => {
        console.log(id)
        const { lessonList } = this.state
        const target = lessonList.findIndex(lesson => lesson.id === id)
        const preTag = lessonList.findIndex(lesson => lesson.isSelected)
        if (preTag > -1) {
            lessonList[preTag].isSelected = false
        }
        if (target > -1) {
            lessonList[target].isSelected = !lessonList[target].isSelected
            this.setState({lessonList})
        }

    }
    onSelectDate = (date: any) => {
        console.log(date)
        const selectDate = moment(date).format()
        console.log(selectDate)
        this.dateCellRender(date)
    }

    getListData = (value:any) => {
        let listData:RangeCell[] = [];
        console.log(value.date())
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'success', content: 'L1', id: '0' },
                ];
            break;
            case 10:
            listData = [
                { type: 'success', content: 'E1', id: '1' },
                { type: 'warning', content: 'L1', id: '0' },
            ];
            break;
            case 15:
                listData = [
                    { type: 'success', content: 'R', id: '2' },
                    { type: 'warning', content: 'L1', id: '0' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    dateCellRender = (value:any) => {
        const listData:RangeCell[] = this.getListData(value);
        return (
            <ul className="events">
            {listData.map(item => (
                <li key={item.content}>
                    <Badge status={item.type} text={item.type === 'success' ? `课程：${item.content}` : `前置：${item.content}`} />
                </li>
            ))}
            </ul>
        );
    }

    selectLessonItem = (id: string) => {
        
    }

    render () {
        const {lessonList} = this.state
        return (
            <Card title="Card title">
                <div className="set-schedule-box">
                    <div className="calendar-setBox">
                        <Calendar mode="month" onSelect={this.onSelectDate} dateCellRender={this.dateCellRender}></Calendar>
                    </div>
                    <div className="lessonSelectBox">
                        <ul>
                            {
                                lessonList.map(lesson => {
                                    return (
                                        <li key={lesson.id} className={lesson.isSelected ? 'is-selected': ''} onClick={() => this.selectLesson(lesson.id)}>{lesson.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Card>
        )
    }
}