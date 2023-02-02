import {ItemList, ButtonList, ImageList} from './styledComponents'

const OptionItem = props => {
  const {choicesListDetails, onClickSetUserChoice} = props
  const {imageUrl, id} = choicesListDetails
  const userChoice = () => {
    onClickSetUserChoice(id)
  }
  return (
    <ItemList>
      <ButtonList
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <ImageList src={imageUrl} alt={id} />
      </ButtonList>
    </ItemList>
  )
}
export default OptionItem
