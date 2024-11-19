import { defineComponent, ref } from 'vue'

interface Props {
  name?: String
}

export default defineComponent({
  props: {
    name: String
  },
  emits: ['on-click'],
  setup(props: Props) {
    const flag = ref(true)
    const data = [
      {
        name: 'kafka'
      },
      {
        name: 'march seven'
      }
    ]
    const fn = (item: any) => {
      console.log(`触发了${item?.name}`)
    }
    return () => (
      <>
        <div>{props?.name}</div>
        <div>
          {flag.value ? (
            <div>
              {data.map((o) => {
                return (
                  <div
                    class={'text-red-500'}
                    onClick={() => {
                      fn(o)
                    }}
                  >
                    {o.name}
                  </div>
                )
              })}
            </div>
          ) : (
            <div>false</div>
          )}
        </div>
      </>
    )
  }
})
