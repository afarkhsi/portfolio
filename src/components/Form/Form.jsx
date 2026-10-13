import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import './style.css';
import ModernButton from '../ModernButton/ModernButton';

emailjs.init({
  publicKey: 'eIE9xQJLjObkTw9_W',
});

function Form() {
  const form = useRef();
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [modalStatus, setModalStatus] = useState(null); // 'success' | 'error' | null

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');

  const regexEmail =
    /^[a-zA-Z][a-zA-Z0-9\-_.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

  const isFormValid = () =>
    firstName.trim().length >= 2 &&
    lastName.trim().length >= 2 &&
    message.trim().length >= 20 &&
    regexEmail.test(email);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setModalStatus('invalid');
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_kyddk1y', 'template_inavdg6', form.current)
      .then(
        () => {
          e.target.reset();
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          setModalStatus('success');
        },
        (error) => {
          console.error('Erreur EmailJS :', error?.text || error);
          setModalStatus('error');
        },
      )
      .finally(() => setIsSending(false));
  };

  const closeModal = () => setModalStatus(null);

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formData">
          <label htmlFor="firstName">{t('form.prenom')}</label>
          <input
            className="text-control"
            name="user_firstName"
            id="firstName"
            placeholder="John"
            onChange={(e) => {
              const value = e.target.value;
              setFirstName(value);
              setFirstNameErrorMessage(
                value.trim().length >= 2 ? '' : t('form.minimumInvalid'),
              );
            }}
          />
          {firstNameErrorMessage && (
            <span className="error_message">{firstNameErrorMessage}</span>
          )}
        </div>

        <div className="formData">
          <label htmlFor="lastName">{t('form.name')}</label>
          <input
            className="text-control"
            name="user_lastName"
            id="lastName"
            placeholder="Doe"
            onChange={(e) => {
              const value = e.target.value;
              setLastName(value);
              setLastNameErrorMessage(
                value.trim().length >= 2 ? '' : t('form.minimumInvalid'),
              );
            }}
          />
          {lastNameErrorMessage && (
            <span className="error_message">{lastNameErrorMessage}</span>
          )}
        </div>

        <div className="formData">
          <label htmlFor="email">{t('form.email')}</label>
          <input
            className="text-control"
            name="user_email"
            id="email"
            placeholder="JohnDoe1995@hotmail.com"
            type="email"
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              setEmailErrorMessage(
                regexEmail.test(value) ? '' : t('form.emailInvalid'),
              );
            }}
          />
          {emailErrorMessage && (
            <span className="error_message">{emailErrorMessage}</span>
          )}
        </div>

        <div className="formData">
          <label htmlFor="message">{t('form.message')}</label>
          <textarea
            className="text-control"
            name="user_message"
            id="message"
            placeholder={t('form.yourMessage')}
            onChange={(e) => {
              const value = e.target.value;
              setMessage(value);
              setMessageErrorMessage(
                value.trim().length >= 20
                  ? ''
                  : t('form.minimumMessageInvalid'),
              );
            }}
          />
          {messageErrorMessage && (
            <span className="error_message">{messageErrorMessage}</span>
          )}
        </div>

        <ModernButton
          type="submit"
          label={isSending ? 'Envoi...' : t('form.submit')}
          disabled={isSending}
        />
      </form>

      {modalStatus && (
        <div className="modal_overlay" onClick={closeModal}>
          <div
            className={`modal_box modal_box_${modalStatus}`}
            onClick={(e) => e.stopPropagation()}
          >
            {modalStatus === 'success' && (
              <>
                <div className="modal_icon modal_icon_success">
                  <svg viewBox="-2 -2 56 56">
                    <circle
                      className="modal_icon_circle"
                      cx="26"
                      cy="26"
                      r="24"
                    />
                    <path
                      className="modal_icon_check"
                      fill="none"
                      d="M14 27l7 7 16-16"
                    />
                  </svg>
                </div>
                <h3>{t('form.success')}</h3>
                <p>{t('form.messageSuccess')}</p>
              </>
            )}

            {modalStatus === 'error' && (
              <>
                <div className="modal_icon modal_icon_error">
                  <svg viewBox="-2 -2 56 56">
                    <circle
                      className="modal_icon_circle"
                      cx="26"
                      cy="26"
                      r="24"
                    />
                    <path
                      className="modal_icon_cross"
                      d="M16 16l20 20M36 16l-20 20"
                    />
                  </svg>
                </div>
                <h3>{t('form.error')}</h3>
                <p>{t('form.messageError')}</p>
              </>
            )}

            {modalStatus === 'invalid' && (
              <>
                <div className="modal_icon modal_icon_error">
                  <svg viewBox="-2 -2 56 56">
                    <circle
                      className="modal_icon_circle"
                      cx="26"
                      cy="26"
                      r="24"
                    />
                    <path
                      className="modal_icon_cross"
                      d="M16 16l20 20M36 16l-20 20"
                    />
                  </svg>
                </div>
                <h3>{t('form.invalid')}</h3>
                <p>{t('form.messageInvalid')}</p>
              </>
            )}

            <button className="modal_action" onClick={closeModal}>
              {t('form.ok')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
