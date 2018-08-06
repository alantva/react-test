import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import FormField from './formField';
import { changeListResume, alterSelectedResume, clearSelectedResume } from '../../reducers/resume';

const fieldsData = [
  { id: 'name', label: 'Nome' },
  { id: 'picture', label: 'Imagem' },
  { id: 'birthDate', label: 'Data de Nascimento' },
  { id: 'gender', label: 'Gênero' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Telefone' },
  { id: 'address', label: 'Endereço' },
  { id: 'latitude', label: 'Latitude' },
  { id: 'longitude', label: 'Longitude' },
  { id: 'score', label: 'Nota' },
  { id: 'date', label: 'Data de Cadastro' }
];

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto'
  },
  subContainer: {
    margin: '0 auto'
  },
  chip: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const FormTable = ({ actions, classes, resume }) => (
  <form className={classes.container} noValidate autoComplete="off">
    {fieldsData.map(d => (
      <FormField
        key={d.id}
        label={d.label}
        name={d.id}
        value={resume.selected[d.id]}
        onChange={actions.alterSelectedResume}
      />
    ))}
    <div className={classes.subContainer}>
      <Chip
        label={resume.selected._id ? 'Editando' : 'Novo'}
        className={classes.chip}
        color={resume.selected._id ? 'secondary' : 'primary'}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={actions.changeListResume}
      >
        <SaveIcon className={classes.leftIcon} />
        Salvar
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={actions.clearSelectedResume}
      >
        <ClearIcon className={classes.leftIcon} />
        Cancelar
      </Button>
    </div>
  </form>
);

FormTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ resume }) => ({ resume });

const mapDispatchToProps = dispatch => ({
  actions: {
    alterSelectedResume: payload => dispatch(alterSelectedResume(payload)),
    clearSelectedResume: () => dispatch(clearSelectedResume()),
    changeListResume: () => dispatch(changeListResume())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FormTable));
