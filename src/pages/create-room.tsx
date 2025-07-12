import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type GetRoomsAPIResponse = Array<{
  id: string
  name: string
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse = await response.json()
      // Simulate an API call to create a room
      return result
    },
  })
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div className="flex flex-col gap-1">
        {data?.map((room) => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>
              <p>{room.name}</p>
            </Link>
          )
        })}
      </div>
      <h1>Create a New Room</h1>
      <Button variant="secondary">
        <Link to="/room">Create Room</Link>
      </Button>
    </div>
  )
}
