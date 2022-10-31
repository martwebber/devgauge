import React from 'react'

export const TopicItem = ({topic}) => {
    console.log(topic.id)
  return (
    <div>
        <p>{topic.topic_content}</p>
    </div>
  )
}
