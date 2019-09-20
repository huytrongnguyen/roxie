import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';

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
        <div className="card">
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
          <div className="card-footer">
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
        <div className="card">
          <div className="card-header">HBox Layout</div>
          <div className="card-body">
            <div className="d-flex flex-row">
              <div className="card mr-1" style={{flexGrow: 1}}>
                <div className="card-header">Panel 1</div>
                <div className="card-body">flex: 1</div>
              </div>
              <div className="card mr-1" style={{width: 100}}>
                <div className="card-header">Panel 2</div>
                <div className="card-body">width: 100</div>
              </div>
              <div className="card" style={{flexGrow: 2}}>
                <div className="card-header">Panel 3</div>
                <div className="card-body">flex: 2</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="d-flex flex-row">
  <div class="card mr-1" style="flex-grow: 1">
    <div class="card-header">Panel 1</div>
    <div class="card-body">flex: 1</div>
  </div>
  <div class="card mr-1" style="width: 100px">
    <div class="card-header">Panel 2</div>
    <div class="card-body">width: 100</div>
  </div>
  <div class="card" style="flex-grow: 2">
    <div class="card-header">Panel 3</div>
    <div class="card-body">flex: 2</div>
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
        <div className="card">
          <div className="card-header">VBox Layout</div>
          <div className="card-body">
            <div className="d-flex flex-column" style={{height: 500}}>
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
            </div>
          </div>
          <div className="card-footer">
            <Highlight language="html">{`
<div class="d-flex flex-column" style="height: 500px">
  <div class="card" style="flex-grow: 1">
    <div class="card-header">Panel 1</div>
    <div class="card-body">flex: 1</div>
  </div>
  <div class="card" style="height: 100px">
    <div class="card-header">Panel 2</div>
    <div class="card-body">height: 100</div>
  </div>
  <div class="card" style="flex-grow: 2">
    <div class="card-header">Panel 3</div>
    <div class="card-body">flex: 2</div>
  </div>
</div>
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}