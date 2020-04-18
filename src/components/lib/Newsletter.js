import React, { Component } from 'react'

import Check from '../svgs/Check'

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


class Newsletter extends Component {
  state = {
    email: '',
    success: false,
    error: '',
    loading: false
  }

  handleInput = (evt) => {
    this.setState({ email: evt.target.value, error: '' })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    evt.stopPropagation()

    const { email } = this.state

    if (!email.match(validEmailRegex)) {
      this.setState({
        error: 'Invalid email',
        loading: false
      })
      return
    }

    try {
      this.setState({ loading: true })

      await fetch('https://backend.tbtc.network/mailing-list/signup', {
        method: 'POST',
        body: JSON.stringify({ email })
      }).then(res => res.json())

      this.setState({
        success: true,
        error: '',
        loading: false
      })
    } catch (err) {
      this.setState({
        error: err.toString(),
        loading: false
      })
    }
  }

  render() {
    const { email, error, success, loading } = this.state

    return (
      <section className="newsletter">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <h2>Рассылка</h2>
                  <p>Введите адрес, чтобы получать новости</p>
                </div>
                <div className="col-sm-12 col-md-4 offset-md-1">
                  <div id="mailing-list" className="mailing-list">
                    <form onSubmit={this.handleSubmit}>
                      <input
                        type="text"
                        disabled={loading || success}
                        onChange={this.handleInput}
                        value={email}
                        placeholder="your@email.com" />
                      { error
                        ? <div className="error">
                            { error }
                          </div>
                        : ''
                      }
                      { success
                        ? <div className="success">
                            <Check width="30px" height="30px" />
                          </div>
                        : <input type="submit" value={loading ? "(submitting...)" : "Подписаться"} />
                      }
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Newsletter
