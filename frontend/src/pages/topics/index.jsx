import React, { useEffect, useState } from 'react'
import { TopicItem } from './topicItem';

export const TopicsHome = () => {
    const [topics, setTopics] =  useState([])
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    useEffect(() => {
        fetch("/topics", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: 'Bearer ' + userInfo.jwt 
            }
            
          })
          .then(res=>res.json())
          .then(r=>setTopics(r))

    },[])

    const topicsList =  topics?.map((topic)=>(
        <TopicItem key={topic.id} topic={topic}/>
    ))
    console.log('topics',topics)
    return (
    <div>
        <h1>topics</h1>
        {
         topicsList
        }

    </div>
  )
}
