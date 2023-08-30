type Props = {
  image: string
}

const BackDrop = ({ image }: Props) => {
  return (
    <>
      <div
        className={`w-full h-[8vh] bg-cover bg-center bg-no-repeat`}
        style={{
            backgroundImage: (`https://image.tmdb.org/t/p/w500/${image}`)
        }}
      ></div>
    </>
  )
}

export default BackDrop
