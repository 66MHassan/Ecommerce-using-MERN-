import React from 'react'

const Sort = () => {
  return (
    <>
    {/* Search by Category */}
              <div className="input-group">
                <select className="form-control">
                  <option value="">All Categories</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  {/* Add more categories here */}
                </select>
                </div>
                </>
  )
}

export default Sort