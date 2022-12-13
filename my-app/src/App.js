import "./App.css";
export default function App(){
  return(
    <Card/>       
  );
}
export function Card() {
  return (
<div class="row">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">FREE</h5>
      <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
      <br /><hr />
      <ul class="fa-ul">
        <li><span class="fa-li"></span>&nbsp;Single User</li> <br />
        <li><span class="fa-li"></span>&nbsp;5GB Storage</li><br />
        <li><span class="fa-li"></span>&nbsp;Unlimited Public Projects</li><br />
        <li><span class="fa-li"></span>&nbsp;Community Access</li><br />
        <li class="text-muted"><span class="fa-li"></span>&nbsp;Unlimited Private Projects</li><br />
        <li class="text-muted"><span class="fa-li"></span>&nbsp;Dedicated Phone Support</li><br />
        <li class="text-muted"><span class="fa-li"></span>&nbsp;Free Subdomain</li><br />
        <li class="text-muted"><span class="fa-li"></span>&nbsp;Monthly Status Reports</li><br />
      </ul>
      <button type="click" class="btn">Button</button>
    </div>

<div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">PLUS</h5>
      <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
      <br /><hr />
      <ul class="fa-ul">
        <li><span class="fa-li"></span>&nbsp; <strong>User</strong></li> <br />
        <li><span class="fa-li"></span>&nbsp;5GB Storage</li><br />
        <li><span class="fa-li"></span>&nbsp;Unlimited Public Projects</li><br />
        <li><span class="fa-li"></span>&nbsp;Community Access</li><br />
        <li class="fa-li" >&nbsp;Unlimited Private Projects</li><br />
        <li class="fa-li"><span class="fa-li"></span>&nbsp;Dedicated Phone Support</li><br />
        <li class="fa-li"><span class="fa-li"></span>&nbsp;Free Subdomain</li><br />
        <li class="text-muted"><span class="fa-li"></span>&nbsp;Monthly Status Reports</li><br />
      </ul>
      <button type="click" class="btn">Button</button>
</div>

<div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">PRO</h5>
      <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
      <br /><hr />
      <ul class="fa-ul">
        <li> &nbsp;<strong>Unlimited Users</strong></li> <br />
        <li> &nbsp;150GB Storage</li><br />
        <li> &nbsp;Unlimited Public Projects</li><br />
        <li> &nbsp;Community Access</li><br />
        <li class="fa-li">&nbsp;Unlimited Private Projects</li><br />
        <li  class="fa-li">&nbsp;Dedicated Phone Support</li><br />
        <li  class="fa-li">&nbsp;<strong>Unlimited&nbsp;</strong>Free Subdomain</li><br />
        <li  class="fa-li">&nbsp;Monthly Status Reports</li><br />
      </ul>
      <button type="click" class="btn">Button</button>
</div>
</div>
  );
}
