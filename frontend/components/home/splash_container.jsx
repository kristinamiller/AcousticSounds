import Splash from './splash';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'

const msp = () => ({

})


const mdp = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))

})

export default connect(msp, mdp)(Splash)