import stls from './Loader.module.sass'

const Loading = () => {
  return (
    <div className={stls.loadingContainer}>
      <div id={stls.loader}></div>
    </div>
  )
}

export default Loading
