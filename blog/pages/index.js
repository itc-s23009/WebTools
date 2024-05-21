// Import with a different name
import HeroComponent from './components/hero'

// Use a different name for the constant
const CustomHero = () => {
  return (
    <HeroComponent title='Hello World!!' subtitle='新しい世界へ' imageOn />
  )
}

export default CustomHero
