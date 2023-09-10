// import PlayButton from "./PlayButton"
import { Button } from '@nextui-org/react'

type Props = {
  image: string
}

const BackDrop = ({ image }: Props) => {
  return (
    <>
      <div
        className={`w-full h-[80vh] bg-center bg-cover bg-no-repeat flex items-center`}
        style={{
          backgroundImage: `
          url(https://image.tmdb.org/t/p/original/${image})`,
          filter: 'brightness(50%)',
        }}
      >
        {/* <center> */}
          {' '}
          <Button
            style={{
              filter: 'brightness(200%)',
            }}
            className="mx-auto my-auto"
            color='secondary'
          >
            Play
          </Button>
        {/* </center> */}
      </div>
    </>
  )
}

export default BackDrop
