type Props = {
  videoUrl: string
}

const VideoPlayer = ({videoUrl}: Props) => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="Video Player"
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
