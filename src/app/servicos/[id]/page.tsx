export default function Service({ params }: { params: { id: string } }) {
  return (
    <div>Service: {params.id}</div>
  )
}
