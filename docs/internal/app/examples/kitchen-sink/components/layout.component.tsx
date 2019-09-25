import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function LayoutExample() {
  return <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Kitchen Sink</li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">All</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Layouts</li>
    </ol>
    <div className="pt-3">
      <div className="container">
      <div className="card mb-3">
          <div className="card-header">Table Layout</div>
          <div className="card-body">
            <div className="container-fluid">
              <div className="row">
                <div className="offset-4 col-4 border">Cell 2</div>
                <div className="col-4 border">Cell 3</div>
              </div>
              <div className="row">
                <div className="col-4 border">Cell 1</div>
                <div className="col-4 border">Cell 4</div>
                <div className="col-4 border">Cell 5</div>
              </div>
              <div className="row">
                <div className="col-8 border">Cell 6</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div className="container-fluid">
  <div className="row">
    <div className="offset-4 col-4 border">Cell 2</div>
    <div className="col-4 border">Cell 3</div>
  </div>
  <div className="row">
    <div className="col-4 border">Cell 1</div>
    <div className="col-4 border">Cell 4</div>
    <div className="col-4 border">Cell 5</div>
  </div>
  <div className="row">
    <div className="col-8 border">Cell 6</div>
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Accordion Layout</div>
          <div className="card-body">
            <div id="accordionExample" className="accordion">
              <div className="card">
                <div className="card-header">
                  <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse1">
                    Accordion Item 1
                  </button>
                </div>
                <div id="collapse1" className="collapse show" data-parent="#accordionExample">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2">
                    Accordion Item 2
                  </button>
                </div>
                <div id="collapse2" className="collapse" data-parent="#accordionExample">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse3">
                    Accordion Item 3
                  </button>
                </div>
                <div id="collapse3" className="collapse" data-parent="#accordionExample">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-0">
            <Highlight language="html">{`
  <div id="accordionExample" class="accordion">
    <div class="card">
      <div class="card-header">
        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse1">
          Accordion Item 1
        </button>
      </div>
      <div id="collapse1" class="collapse show" data-parent="#accordionExample">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          Ad vegan excepteur butcher vice lomo.
          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse2">
          Accordion Item 2
        </button>
      </div>
      <div id="collapse2" class="collapse" data-parent="#accordionExample">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          Ad vegan excepteur butcher vice lomo.
          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse3">
          Accordion Item 3
        </button>
      </div>
      <div id="collapse3" class="collapse" data-parent="#accordionExample">
        <div class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          Ad vegan excepteur butcher vice lomo.
          Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">HBox Layout</div>
          <div className="card-body">
            <Container layout="hbox">
              <div className="card" style={{flexGrow: 1}}>
                <div className="card-header">Panel 1</div>
                <div className="card-body">flex: 1</div>
              </div>
              <div className="card" style={{width: 100}}>
                <div className="card-header">Panel 2</div>
                <div className="card-body">width: 100</div>
              </div>
              <div className="card" style={{flexGrow: 2}}>
                <div className="card-header">Panel 3</div>
                <div className="card-body">flex: 2</div>
              </div>
            </Container>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<Container layout="hbox" className="card-body p-0">
  <div className="card" style={{flexGrow: 1}}>
    <div className="card-header">Panel 1</div>
    <div className="card-body">flex: 1</div>
  </div>
  <div className="card" style={{width: 100}}>
    <div className="card-header">Panel 2</div>
    <div className="card-body">width: 100</div>
  </div>
  <div className="card" style={{flexGrow: 2}}>
    <div className="card-header">Panel 3</div>
    <div className="card-body">flex: 2</div>
  </div>
</Container>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">VBox Layout</div>
          <div className="card-body">
            <Container layout="vbox" style={{height:500}}>
              <div className="card" style={{flexGrow: 1}}>
                <div className="card-header">Panel 1</div>
                <div className="card-body">flex: 1</div>
              </div>
              <div className="card" style={{height: 100}}>
                <div className="card-header">Panel 2</div>
                <div className="card-body">height: 100</div>
              </div>
              <div className="card" style={{flexGrow: 2}}>
                <div className="card-header">Panel 3</div>
                <div className="card-body">flex: 2</div>
              </div>
            </Container>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<Container layout="vbox" style={{height:500}}>
  <div className="card" style={{flexGrow: 1}}>
    <div className="card-header">Panel 1</div>
    <div className="card-body">flex: 1</div>
  </div>
  <div className="card" style={{height: 100}}>
    <div className="card-header">Panel 2</div>
    <div className="card-body">height: 100</div>
  </div>
  <div className="card" style={{flexGrow: 2}}>
    <div className="card-header">Panel 3</div>
    <div className="card-body">flex: 2</div>
  </div>
</Container>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Column Layout</div>
          <div className="card-body">
            <div className="card" style={{width:400,height:200}}>
              <div className="card-header">Container Panel</div>
              <Container layout="column" className="card-body p-0">
                <div className="card" style={{height:100}}>
                  <div className="card-header">Child Panel 1</div>
                  <div className="card-body"></div>
                </div>
                <div className="card" style={{height:100}}>
                  <div className="card-header">Child Panel 2</div>
                  <div className="card-body"></div>
                </div>
              </Container>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div className="card" style={{width:400,height:200}}>
  <div className="card-header">Container Panel</div>
  <Container layout="column" className="card-body p-0">
    <div className="card" style={{height:100}}>
      <div className="card-header">Child Panel 1</div>
      <div className="card-body"></div>
    </div>
    <div className="card" style={{height:100}}>
      <div className="card-header">Child Panel 2</div>
      <div className="card-body"></div>
    </div>
  </Container>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Fit Layout</div>
          <div className="card-body">
            <div className="card" style={{height:200}}>
              <div className="card-header">Container Panel</div>
              <Container layout="fit" className="card-body p-0">
                <div className="card">
                  <div className="card-header">Inner Panel</div>
                  <div className="card-body">This panel is fit within its container.</div>
                </div>
              </Container>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div className="card" style={{height:200}}>
  <div className="card-header">Container Panel</div>
  <Container layout="fit" className="card-body">
    <div className="card">
      <div className="card-header">Inner Panel</div>
      <div className="card-body">This panel is fit within its container.</div>
    </div>
  </Container>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Border Layout</div>
          <div className="card-body">
            <Container layout="border" style={{width:700,height:400}}
                        north={<div className="card">
                          <div className="card-header">North Region</div>
                          <div className="card-body"></div>
                        </div>}
                        south={<div className="card" style={{height:100}}>
                          <div className="card-header">South Region</div>
                          <div className="card-body">height: 100px</div>
                        </div>}
                        west={<div className="card" style={{width:125}}>
                          <div className="card-header">West Region</div>
                          <div className="card-body">width: 125px</div>
                        </div>}
                        east={<div className="card">
                          <div className="card-header">East Region</div>
                          <div className="card-body"></div>
                        </div>}
                        center={<div className="card">
                          <div className="card-header">Center Region</div>
                          <div className="card-body"></div>
                        </div>} />
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<Container layout="border" style={{width:700,height:400}}
            north={<div className="card">
              <div className="card-header">North Region</div>
              <div className="card-body"></div>
            </div>}
            south={<div className="card">
              <div className="card-header">South Region</div>
              <div className="card-body"></div>
            </div>}
            west={<div className="card">
              <div className="card-header">West Region</div>
              <div className="card-body"></div>
            </div>}
            east={<div className="card">
              <div className="card-header">East Region</div>
              <div className="card-body"></div>
            </div>}
            center={<div className="card">
              <div className="card-header">Center Region</div>
              <div className="card-body"></div>
            </div>} />
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}