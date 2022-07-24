export default function BannerButton({ children, color, location }) {
  return (
    <div>
      <span className={`bannerButton ${color} ${location}`}>{children}</span>
    </div>
  )
}
