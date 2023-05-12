import React, { useCallback, useState } from 'react'
import {produce} from 'immer'

const initialState = [
    { name:'house',
      rooms:[ {
        name:'room1',
        text:'Room1'
    }]
       
    },
    {
        name:'car',
        text:'i20'
    }
]

function RoomName(props) {
    console.log('roomname')
    const {
        data,onChange
    }=props
    console.log(props,'loo')
    return (
        <div>
          <div>update room name</div>
            <input type="text" value={data.text} onChange={onChange} />
          
        </div>
    )
}
const CarName = React.memo((props)=>{
    console.log('carname')
    const {
        data,onChange
    } = props
    console.log(props)
    return (
        <div>
          <div>update car name</div>
            <input type="text" value={data.text} onChange={onChange}/>
          
        </div>
    )

})


export default function Test() {
  const [info,setInfo] = useState(initialState)
  console.log(info,'jk')
  // shallow copy
  const onRoomChange = (evt)=>{
    setInfo((state)=>{
        console.log(state)
        var newState = [
            {
                ...state[0],
                rooms:[
                    {
                        ...state[0].rooms[0],
                        text : evt.target.value
                    }
                ]

            },
            state[1]

        ]
        return newState 

    })

  }
  // Deep copy
  const onDeepRoomChange = (evt)=>{
    setInfo((state)=>{
        console.log(state)
        const newState = JSON.parse(JSON.stringify(state))
        newState[0].rooms[0].text = evt.target.value
        return newState 

    })

  }
  // imer copy
  const onImerRoomChange = (evt)=>{
    setInfo((state)=>{
        const newState = produce(state,(draft)=>{
            draft[0].rooms[0].text = evt.target.value

        })
        
        return newState 

    })

  }

  // shallow copy
  const onCarChange = useCallback((evt)=>{
        setInfo((state)=>{
            var newState = [
                state[0],
                {
                    ...state[1],
                    text:evt.target.value
                }
            ]
            return newState
        })
    
      },[]
  )
  // Deep copy
  const onDeepCarChange = useCallback((evt)=>{
        setInfo((state)=>{
            // var newState = [
            //     state[0],
            //     {
            //         ...state[1],
            //         text:evt.target.value
            //     }
            // ]
            const newState = JSON.parse(JSON.stringify(state)) 
            newState[1].text = evt.target.value
            return newState
        })
    
      },[]
  ) 
  // immer copy
  const onImerCarChange = useCallback((evt)=>{
    setInfo((state)=>{
        const newState = produce(state,(draft)=>{
            draft[1].text = evt.target.value
        }) 
        
        return newState
    })

  },[]
) 

  return (
    <div>
    
        <RoomName data={info[0].rooms[0]} onChange={onImerRoomChange}/>
        <CarName data={info[1]} onChange={onImerCarChange}/>
    </div>
  )
}

 