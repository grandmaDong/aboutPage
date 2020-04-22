import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

interface Blog {
  id: number;
  title: String;
  content: String;
  creatAt: String;
  tag: String;
}
interface Props{}
interface State{
  blogList: Blog[]
}
export class Home extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      blogList: [
        {
          id: 0,
          title: 'MySQL常见面试题整理',
          content: '1、数据库三大范式 第一范式：每个列都不可再拆分第二范式：在第一范式的基础上，非主键列完全依赖于主键，而不能是依赖于主键的一部分第三范式：在第二范式的基础上，非主键列只依赖于主键，不依赖于其他非主键在设计数据库结构时，要尽量遵守三范式，如果不遵守，必须有足够的理由，比如性能，事实上我们经常会为了性能 ',
          creatAt: '2010-03-26',
          tag: 'mysql'
        },
        {
          id: 1,
          title: 'MySQL常见面试题整理',
          content: '1、数据库三大范式 第一范式：每个列都不可再拆分第二范式：在第一范式的基础上，非主键列完全依赖于主键，而不能是依赖于主键的一部分第三范式：在第二范式的基础上，非主键列只依赖于主键，不依赖于其他非主键在设计数据库结构时，要尽量遵守三范式，如果不遵守，必须有足够的理由，比如性能，事实上我们经常会为了性能 ',
          creatAt: '2010-03-26',
          tag: 'mysql'
        },
        {
          id: 2,
          title: 'MySQL常见面试题整理',
          content: '1、数据库三大范式 第一范式：每个列都不可再拆分第二范式：在第一范式的基础上，非主键列完全依赖于主键，而不能是依赖于主键的一部分第三范式：在第二范式的基础上，非主键列只依赖于主键，不依赖于其他非主键在设计数据库结构时，要尽量遵守三范式，如果不遵守，必须有足够的理由，比如性能，事实上我们经常会为了性能 ',
          creatAt: '2010-03-26',
          tag: 'mysql'
        },
        {
          id: 3,
          title: 'MySQL常见面试题整理',
          content: '1、数据库三大范式 第一范式：每个列都不可再拆分第二范式：在第一范式的基础上，非主键列完全依赖于主键，而不能是依赖于主键的一部分第三范式：在第二范式的基础上，非主键列只依赖于主键，不依赖于其他非主键在设计数据库结构时，要尽量遵守三范式，如果不遵守，必须有足够的理由，比如性能，事实上我们经常会为了性能 ',
          creatAt: '2010-03-26',
          tag: 'mysql'
        }
      ]
    }
  }

  componentWillMount () {
    // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists').then(
    //     (res) => {
    //         console.log(res)
    //     }
    // ).catch(error => console.log(error));
    axios.get('/api/blog/list').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
}

  blogList = () => {
    const { blogList } = this.state
    return (
      blogList.map(blog => (
        <article className="info-post" key={`${blog.id}`}>
          <div className="blog-title">{blog.title}</div>
          <div className="blog-time-tag">
            <div className="create-time">
              <span className="time-icon"></span><span>{blog.creatAt}</span>
            </div>
            <div className="tag">
              <span className="tag-icon"></span><span>{blog.tag}</span>
            </div>
            
          </div>
          <div className="blog-content">
            <p>
              {blog.content}
            </p>
            <div className="view-more"><Link to="/blogDetail">查看全文 »</Link></div>
          </div>
        </article>
      ))
    )
  }

  render () {
    return (
      <div className="home-page">
        <section>
          {this.blogList()}
        </section>
      </div>
    )
  }
}