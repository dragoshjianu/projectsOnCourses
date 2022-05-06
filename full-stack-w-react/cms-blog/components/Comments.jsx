import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'
import { comment } from 'postcss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])
  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="fon-semibold mb-8 border-b pb-4 text-xl">
            {`${comments.length} Comments`}
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-grey-100 mb-4 border-b pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">
                  {comment.name} on{' '}
                  {moment(comment.createdAt).format('DD-MM-YYYY')}
                </span>
              </p>
              <p className="w-ull whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
