import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Center, Content, CloseButton, BodyStyled, CloseIconStyled } from './styled';

export default class ModalContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    col: PropTypes.object,
  };

  static defaultProps = {
    col: { xs: 12 },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { children, col, onClose } = this.props;

    return (
      <Container>
        <BodyStyled />
        <Center>
          <Grid>
            <Row>
              <Col {...col}>
                <Content>
                  <CloseButton onClick={onClose}>
                    <CloseIconStyled />
                  </CloseButton>

                  <form name="quote" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                     <ul>
                        <li>
                           <label class="desc">Registered Owner (s)</label>
                           <input name="owner" type="text" class="text medium"/>
                        </li>
                        <li>
                           <label class="desc">Name:</label>
                           <span>
                           <input type="text" name="ofname" />
                           <label class="desc">First</label>
                           </span>
                           <span>
                           <input type="text" name="olname"/>
                           <label class="desc">Last</label>
                           </span>
                        </li>
                        <li>
                           <label class="desc">Street Address:</label>
                           <input name="add" type="text" id="add" size="50"/>
                        </li>
                        <li>
                           <span>
                           <label class="desc">City</label>
                           <input type="text" name="city" id="city" />
                           </span>
                           <span>
                              <label class="desc">State:</label>
                              <select name="state" id="state">
                                 <option value="AL">AL</option>
                                 <option value="AK">AK</option>
                                 <option value="AZ">AZ</option>
                                 <option value="AR">AR</option>
                                 <option value="CA">CA</option>
                                 <option value="CO">CO</option>
                                 <option value="CT">CT</option>
                                 <option value="DE">DE</option>
                                 <option value="DC">DC</option>
                                 <option value="FL">FL</option>
                                 <option value="GA">GA</option>
                                 <option value="HA">HA</option>
                                 <option value="ID">ID</option>
                                 <option value="IL">IL</option>
                                 <option value="IN">IN</option>
                                 <option value="IA">IA</option>
                                 <option value="KS">KS</option>
                                 <option value="KY">KY</option>
                                 <option value="LA">LA</option>
                                 <option value="ME">ME</option>
                                 <option value="MD">MD</option>
                                 <option value="MA">MA</option>
                                 <option value="MI">MI</option>
                                 <option value="MN">MN</option>
                                 <option value="MS">MS</option>
                                 <option selected="selected" value="MO">MO</option>
                                 <option value="MT">MT</option>
                                 <option value="NE">NE</option>
                                 <option value="NV">NV</option>
                                 <option value="NH">NH</option>
                                 <option value="NJ">NJ</option>
                                 <option value="NM">NM</option>
                                 <option value="NY">NY</option>
                                 <option value="NC">NC</option>
                                 <option value="ND">ND</option>
                                 <option value="OH">OH</option>
                                 <option value="OK">OK</option>
                                 <option value="OR">OR</option>
                                 <option value="PA">PA</option>
                                 <option value="RI">RI</option>
                                 <option value="SC">SC</option>
                                 <option value="SD">SD</option>
                                 <option value="TN">TN</option>
                                 <option value="TX">TX</option>
                                 <option value="UT">UT</option>
                                 <option value="VT">VT</option>
                                 <option value="VA">VA</option>
                                 <option value="WA">WA</option>
                                 <option value="WV">WV</option>
                                 <option value="WI">WI</option>
                                 <option value="WY">WY</option>
                              </select>
                           </span>
                        </li>
                        <li>
                           <label class="desc">Zip Code:</label>
                           <input type="text" name="zip" id="zip" />
                        </li>
                        <li>
                           <span>
                           <label class="desc">Work Phone:</label>
                           <input type="text" name="wphone" id="wphone" />
                           </span>
                           <span>
                           <label class="desc">Home Phone:</label>
                           <input type="text" name="hphone" id="hphone" />
                           </span>
                        </li>
                        <li>
                           <span>
                           <label class="desc">Email Address:</label>
                           <input type="text" name="email" id="email" />
                           </span>
                           <span>
                           <label class="desc">Fax Number:</label>
                           <input type="text" name="fax" id="fax" />
                           </span>
                        </li>
                        <li>
                           &nbsp;
                           &nbsp;
                        </li>
                        <li>
                           <label class="desc">How did you hear about us?</label>
                           <input name="hear" type="text" id="hear" size="50" />
                        </li>
                        <li>
                           <label class="desc">Occupation:</label>
                           <input name="occ" type="text" id="occ" size="50" />
                        </li>
                        <li>
                           <label class="desc">Present Insurance Company:</label>
                           <input name="ins" type="text" id="ins" size="50" />
                        </li>
                        <li>
                           <label class="desc">Expiration Date of Current Policy:</label>
                           <span>
                              <select name="edmonth">
                                 <option value="00"></option>
                                 <option value="01">1 - January</option>
                                 <option value="02">2 - February</option>
                                 <option value="03">3 - March</option>
                                 <option value="04">4 - April</option>
                                 <option value="05">5 - May</option>
                                 <option value="06">6 - June</option>
                                 <option value="07">7 - July</option>
                                 <option value="08">8 - August</option>
                                 <option value="09">9 - September</option>
                                 <option value="10">10 - October</option>
                                 <option value="11">11 - November</option>
                                 <option value="12">12 - December</option>
                              </select>
                              <label class="desc">Month</label>
                           </span>
                           <span>
                              <select name="edday">
                                 <option value="00"></option>
                                 <option value="01">1</option>
                                 <option value="02">2</option>
                                 <option value="03">3</option>
                                 <option value="04">4</option>
                                 <option value="05">5</option>
                                 <option value="06">6</option>
                                 <option value="07">7</option>
                                 <option value="08">8</option>
                                 <option value="09">9</option>
                                 <option value="10">10</option>
                                 <option value="11">11</option>
                                 <option value="12">12</option>
                                 <option value="13">13</option>
                                 <option value="14">14</option>
                                 <option value="15">15</option>
                                 <option value="16">16</option>
                                 <option value="17">17</option>
                                 <option value="18">18</option>
                                 <option value="19">19</option>
                                 <option value="20">20</option>
                                 <option value="21">21</option>
                                 <option value="22">22</option>
                                 <option value="23">23</option>
                                 <option value="24">24</option>
                                 <option value="25">25</option>
                                 <option value="26">26</option>
                                 <option value="27">27</option>
                                 <option value="28">28</option>
                                 <option value="29">29</option>
                                 <option value="30">30</option>
                                 <option value="31">31</option>
                              </select>
                              <label class="desc">Day</label>
                           </span>
                           <span>
                              <select name="edyear">
                                 <option value="0000"></option>
                                 <option value="2019">2019</option>
                                 <option value="2020">2020</option>
                                 <option value="2021">2021</option>
                                 <option value="2022">2022</option>
                                 <option value="2023">2023</option>
                                 <option value="2024">2024</option>
                                 <option value="2025">2025</option>
                                 <option value="2026">2026</option>
                                 <option value="2027">2027</option>
                                 <option value="2028">2028</option>
                              </select>
                              <label class="desc">Year</label>
                           </span>
                        </li>
                        <li>
                           <label class="desc">Check this box if this is a new purchase:</label>
                           <input name="newPurchase" type="checkbox" value="Yes" />
                        </li>
                        <li>
                           <label class="desc">AOPA Member #:</label>
                           <input name="aopa" type="text" id="aopa" size="20" />
                        </li>
                        <li>
                           <label class="desc">EAA Member #:</label>
                           <input name="eaa" type="text" id="eaa" size="20" />
                        </li>
                        <li>
                           <h2>Aircraft Insurance Quote</h2>
                        </li>
                        <li>
                           <label class="desc">N#:</label>
                           <input type="text" name="n" id="n" />
                        </li>
                        <li>
                           <label class="desc">Year:</label>
                           <input type="text" name="year" id="year"/>
                        </li>
                        <li>
                           <label class="desc">Make:</label>
                           <input type="text" name="make" id="make" />
                        </li>
                        <li>
                           <label class="desc">Model:</label>
                           <input type="text" name="amodel" />
                        </li>
                        <li>
                           <label class="desc">Total Seats:</label>
                           <input type="text" name="seats" id="seats" />
                        </li>
                        <li>
                           <label class="desc">Insured Value:</label>
                           <span>$</span><span class="dollar"><input type="text" name="value" id="value" /></span>
                        </li>
                        <li>
                           <label class="desc">Base Airport Identifier:</label>
                           <input name="id" type="text" id="id" size="10" />
                        </li>
                        <li>
                           <label class="desc">Base Airport Name:</label>
                           <input name="airport" type="text" id="airport" size="50" />
                        </li>
                        <li>
                           <label class="desc">Method of Storage:</label>
                           <input type="radio" name="store" id="store" value="hangar" /> Hangared
                        </li>
                        <li>
                           <input type="radio" name="store" id="store2" value="tied" /> Tied Down
                        </li>
                        <li>
                           <label class="desc">Type of Use:</label>
                           <select name="use" class="select medium">
                              <option value=""></option>
                              <option value="Personal Pleasure and Business / Non Commercial">Personal Pleasure and Business / Non Commercial</option>
                              <option value="Other">Other (Please advise details in the Comments section below)</option>
                           </select>
                        </li>
                        <li>
                           <label class="desc">Lienholder:</label>
                           <input type="text" name="lien" id="lien" />
                        </li>
                        <li>
                           <label class="desc">Amount of Loan:</label>
                           <span>$</span><span class="dollar"><input type="text" name="loan" id="loan" /></span>
                        </li>
                        <li>
                           <label class="desc">Is Aircraft on floats?</label>
                           Yes <input type="radio" name="float" id="float" value="Yes" />
                           No <input type="radio" name="float" id="float" value="No" />
                        </li>
                        <li>
                        </li>
                        <li>
                           <h2>Pilot Information</h2>
                        </li>
                     </ul>
                     <div id="pilot-container" class="pilot-container">
                        <ul class="pilot">
                           
                           <li>
                              <label class="desc">First Name:</label>
                              <input type="text" name="fname[1]" />
                           </li>
                           <li>
                              <label class="desc">Last Name:</label>
                              <input type="text" name="lname[1]" />
                           </li>
                           <li>
                              <label class="desc">Age or DOB:</label>
                              <span>Age:</span>
                              <span><input type="text" name="age[1]" /></span>
                           </li>
                           <li>
                              <span>DOB:</span>
                              <span>
                                 <select name="dobmonth[1]">
                                    <option value="">Month</option>
                                    <option value="01">1 - January</option>
                                    <option value="02">2 - February</option>
                                    <option value="03">3 - March</option>
                                    <option value="04">4 - April</option>
                                    <option value="05">5 - May</option>
                                    <option value="06">6 - June</option>
                                    <option value="07">7 - July</option>
                                    <option value="08">8 - August</option>
                                    <option value="09">9 - September</option>
                                    <option value="10">10 - October</option>
                                    <option value="11">11 - November</option>
                                    <option value="12">12 - December</option>
                                 </select>
                              </span>
                              <span>
                                 <select name="dobday[1]">
                                    <option value="">Day</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                 </select>
                              </span>
                              <span>
                                 <select name="dobyear[1]">
                                    <option value="">Year</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                    <option value="1964">1964</option>
                                    <option value="1963">1963</option>
                                    <option value="1962">1962</option>
                                    <option value="1961">1961</option>
                                    <option value="1960">1960</option>
                                    <option value="1959">1959</option>
                                    <option value="1958">1958</option>
                                    <option value="1957">1957</option>
                                    <option value="1956">1956</option>
                                    <option value="1955">1955</option>
                                    <option value="1954">1954</option>
                                    <option value="1953">1953</option>
                                    <option value="1952">1952</option>
                                    <option value="1951">1951</option>
                                    <option value="1950">1950</option>
                                    <option value="1949">1949</option>
                                    <option value="1948">1948</option>
                                    <option value="1947">1947</option>
                                    <option value="1946">1946</option>
                                    <option value="1945">1945</option>
                                    <option value="1944">1944</option>
                                    <option value="1943">1943</option>
                                    <option value="1942">1942</option>
                                    <option value="1941">1941</option>
                                    <option value="1940">1940</option>
                                    <option value="1939">1939</option>
                                    <option value="1938">1938</option>
                                    <option value="1937">1937</option>
                                    <option value="1936">1936</option>
                                    <option value="1935">1935</option>
                                    <option value="1934">1934</option>
                                    <option value="1933">1933</option>
                                    <option value="1932">1932</option>
                                    <option value="1931">1931</option>
                                    <option value="1930">1930</option>
                                    <option value="1929">1929</option>
                                    <option value="1928">1928</option>
                                    <option value="1927">1927</option>
                                    <option value="1926">1926</option>
                                    <option value="1925">1925</option>
                                    <option value="1924">1924</option>
                                    <option value="1923">1923</option>
                                    <option value="1922">1922</option>
                                    <option value="1921">1921</option>
                                    <option value="1920">1920</option>
                                 </select>
                              </span>
                           </li>
                           <li>
                              <label class="desc">License Type:</label>
                              <select name="lic[1]" class="select small">
                                 <option value="Student">Student</option>
                                 <option value="Private">Private</option>
                                 <option value="Commercial">Commercial</option>
                                 <option value="ATP">ATP</option>
                                 <option value="Sport">Sport</option>
                              </select>
                           </li>
                           <li>
                              <label class="desc">Ratings (Please choose all that apply):</label>
                              <input name="ifr[1]" type="checkbox" value="instrument" /> IFR
                           </li>
                           <li>
                              <input name="sea[1]" type="checkbox" value="sea" /> Sea
                           </li>
                           <li>
                              <input name="me[1]" type="checkbox" value="multiengine" /> Multi-engine
                           </li>
                           <li>
                              <input name="rotor[1]" type="checkbox" value="roto" /> Rotor
                           </li>
                           <li>
                              <input name="cfi[1]" type="checkbox" value="cfi" /> CFI
                           </li>
                           <li>
                              <label class="desc">Any aviation accidents, waivers, violations, losses, incidents, DUI, DWI's?</label>
                              <input name="accidentsyesno[1]" type="radio" value="Yes" /> Yes
                              <input name="accidentsyesno[1]" type="radio" value="No" /> No 
                           </li>
                           <li>
                              <label class="desc">If yes, please advise the detail and remember to include the date of the loss and the amount paid out by the insurance company.</label>
                              <textarea name="accidents[1]" cols="45" rows="5"></textarea>
                           </li>
                           <li>
                              &nbsp;
                           </li>
                           
                           <li>
                              <label class="desc">Total Hours:</label>
                              <input type="text" name="total[1]" />
                           </li>
                           <li>
                              <label class="desc">In this model:</label>
                              <input type="text" name="model[1]" />
                           </li>
                           <li>
                              <label class="desc">Retractable Gear:</label>
                              <input type="text" name="retract[1]" />
                           </li>
                           <li>
                              <label class="desc">Multi-Engine:</label>
                              <input type="text" name="meh[1]" />
                           </li>
                           <li>
                              <label class="desc">Tailwheel:</label>
                              <input type="text" name="tw[1]" />
                           </li>
                           <li>
                              <label class="desc">Turboprop:</label>
                              <input type="text" name="tp[1]" />
                           </li>
                           <li>
                              <label class="desc">Turbine Jet:</label>
                              <input type="text" name="pj[1]" />
                           </li>
                           <li>
                              <label class="desc">Rotor:</label>
                              <input type="text" name="rot[1]" />
                           </li>
                           <li>
                              <label class="desc">Seaplane:</label>
                              <input type="text" name="seap[1]" />
                           </li>
                           <li>
                              <label class="desc">Other:</label>
                              <input type="text" name="otherhours[1]" />
                           </li>
                           <li>
                              <label class="desc">Last 12 Months:</label>
                              <input type="text" name="last12[1]" />
                           </li>
                           <li>
                              <label class="desc">Last School Attended in the Make and Model?</label>
                              <input type="text" name="school[1]" />
                           </li>
                           <li>
                              <label class="desc">When?</label>
                              <input type="text" name="schoolWhen[1]" />
                           </li>
                           <li>
                              <label class="desc">Where?</label>
                              <input type="text" name="schoolWhere[1]" />
                           </li>
                           <input type="hidden" name="pilot[]" value="1" />
                        </ul>
                     </div>
                     <ul>
                        <li>
                           <h2>Coverages</h2>
                        </li>
                        <li>
                           <label class="desc">Liability Limits Requested:</label>
                        </li>
                        <li>
                           <input type="radio" name="coverage" id="radio" value="1/100" />
                           $1,000,000 Combined Single Limit including $100,000 per passenger
                        </li>
                        <li>
                           <input type="radio" name="coverage" id="radio2" value="1CSL" />
                           $1,000,000 Combined Single Limit with no passenger limitation
                        </li>
                        <li>
                           <input type="radio" name="coverage" id="radio3" value="Other Liability Requested" />
                           Other (Specify)
                        </li>
                        <li>
                           &nbsp;
                           <input name="coverageOther" type="text" id="coverageOther" size="50" />
                        </li>
                        <li>
                           <label class="desc">All pilots above have a valid and effective pilot certificate:</label>
                           <input type="radio" name="valid" id="radio4" value="All Pilots have a valid pilot certificate" /> Yes
                           <input type="radio" name="valid" id="radio5" value="NO, Not All Pilots have a valid pilot certificate" /> No
                        </li>
                        <li>
                           <label class="desc">Do you own any other aircraft?</label>
                           <input type="radio" name="own" id="radio7" value="I own another aircraft." /> Yes
                           <input type="radio" name="own" id="radio6" value="No, I do not own another aircraft."  /> No
                        </li>
                        <li>
                        </li>
                        <li>
                           <h2>Comments</h2>
                        </li>
                        <li>
                           Please list any comments or questions here:
                        </li>
                        <li>
                           <textarea name="comments" id="comments" cols="45" rows="5"></textarea>
                        </li>
                        <li>
                           <button type="submit" name="button" id="button">Submit</button>
                        </li>
                     </ul>
                  </form>          
                </Content>
              </Col>
            </Row>
          </Grid>
        </Center>
      </Container>
    );
  }
}
