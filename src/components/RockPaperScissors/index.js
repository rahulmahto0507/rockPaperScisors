import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  AppContainer,
  ContentContainer,
  OptionContainer,
  Option,
  OptionList,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopUpImage,
  PopUpBody,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  ResultText,
  PlayAgainButton,
  ScoreContainer,
  ScorePhrase,
  ScoreNumber,
  GameViewContainer,
} from './styledComponents'

import OptionItem from '../OptionItem'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}
class RockPaperScissors extends Component {
  state = {
    userChoice: '',
    gameChoice: '',
    gameStatus: gameStatusConstants.inProgress,
    score: 0,
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <OptionList>
        {choicesList.map(item => (
          <OptionItem
            key={item.id}
            choicesListDetails={item}
            onClickSetUserChoice={this.onClickSetUserChoice}
          />
        ))}
      </OptionList>
    )
  }

  renderGameWonView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {gameChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]
    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ContentContainer>
          <OptionContainer>
            <Option>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Option>
          </OptionContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ContentContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopUpBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />

                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopUpBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}
export default RockPaperScissors
