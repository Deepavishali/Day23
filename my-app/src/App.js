import "./App.css";

export default function App() {
  return(
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {/* Free Tier */}
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">FREE</h5>
              <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
               <br/><hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Single User</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;5GB Storage</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Unlimited Public Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Community Access</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>&nbsp;Unlimited
                  Private Projects</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>&nbsp;Dedicated
                  Phone Support</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>&nbsp;Free Subdomain
                </li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>&nbsp;Monthly Status
                  Reports</li>
              </ul>
              <div class="d-grid">
                {/* <a href="#" class="btn btn-primary text-uppercase">Button</a> */}
                <button type="click" class="btn btn-primary text-uppercase">Button</button>
              </div>
            </div>
          </div>
        </div>
        {/* Plus Tier */}
        <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">PLUS</h5>
              <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
              <br/><hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>&nbsp;5 Users</strong></li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;50GB Storage</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Unlimited Public Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Community Access</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Unlimited Private Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Dedicated Phone Support</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Free Subdomain</li>
                <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>&nbsp;Monthly Status
                  Reports</li>
              </ul>
              <div class="d-grid">
                {/* <a href="#" class="btn btn-primary text-uppercase">Button</a> */}
                 <button type="click" class="btn btn-primary text-uppercase">Button</button>
              </div>
            </div>
          </div>
        </div>
        {/* Pro Tier */}
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-muted text-uppercase text-center">PRO</h5>
              <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
              <br/><hr/>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>&nbsp;Unlimited Users</strong>
                </li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;150GB Storage</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Unlimited Public Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Community Access</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Unlimited Private Projects</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Dedicated Phone Support</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;<strong>Unlimited</strong> Free
                  Subdomains</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>&nbsp;Monthly Status Reports</li>
              </ul>
              <div class="d-grid">
                {/* <a href="#" class="btn btn-primary text-uppercase">Button</a> */}
                <button type="click" class="btn btn-primary text-uppercase">Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     );
  }