import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()

  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
  }, [id])

  return (
    <section>
      <h1>Página producto:</h1>
      <p>{product?.id}</p>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
      <img src={product?.image} />
    </section>
  )
}

export default ProductPage
