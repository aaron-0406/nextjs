import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <h1>Hello World</h1>

      {productList.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Home
