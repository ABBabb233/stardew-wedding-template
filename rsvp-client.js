export function enterRsvpSuccessState({ section, form, success }) {
  section.style.minHeight = `${section.getBoundingClientRect().height}px`
  form.hidden = true
  success.classList.add('-is-complete')
  success.hidden = false
  success.classList.add('-is-visible')
  success.focus({ preventScroll: true })
}

export function exitRsvpSuccessState({ section, form, success }) {
  form.hidden = false
  success.hidden = true
  section.classList.remove('is-complete')
  section.style.minHeight = ''
}

export function initializeRsvp(rsvpConfig) {
  const rsvpSection = document.querySelector('#rsvp')
  const rsvpForm = document.querySelector('#rsvp-form')
  const rsvpSuccess = document.querySelector('#rsvp-success')
  const rsvpSuccessTitle = document.querySelector('#rsvp-success-title')
  const rsvpSuccessSummary = document.querySelector('#rsvp-success-summary')
  const rsvpError = document.querySelector('#rsvp-error')
  const rsvpSubmit = rsvpForm.querySelector('[type="submit"]')

  // 清空原有表单，替换成跳转按钮，保留整个RSVP板块
  rsvpForm.innerHTML = `
    <div style="text-align:center;padding:20px 10px;">
      <p style="color:#fff;margin:18px 0;font-size:17px;">欢迎来我们的婚礼，请点击下方按钮填写报名信息✨</p >
      <a href=" " target="_blank" style="
        display: inline-block;
        padding:14px 28px;
        background:#e6a520;
        color:#222;
        font-weight:bold;
        text-decoration:none;
        border-radius:6px;
        font-size:20px;
      ">前往鹈鹕镇登记</a >
    </div>
  `
}
