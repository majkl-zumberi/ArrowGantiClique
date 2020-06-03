'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">arrow-ganti-clique documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-aa44646f8304d149e66c5a2ac14b5d36"' : 'data-target="#xs-components-links-module-AppModule-aa44646f8304d149e66c5a2ac14b5d36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-aa44646f8304d149e66c5a2ac14b5d36"' :
                                            'id="xs-components-links-module-AppModule-aa44646f8304d149e66c5a2ac14b5d36"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedbackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-d467ae0436979a3d2bbd24ead46b4323"' : 'data-target="#xs-components-links-module-AuthModule-d467ae0436979a3d2bbd24ead46b4323"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-d467ae0436979a3d2bbd24ead46b4323"' :
                                            'id="xs-components-links-module-AuthModule-d467ae0436979a3d2bbd24ead46b4323"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeedModule.html" data-type="entity-link">FeedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeedModule-ab9a114fe1f5285027f0fadf6d739a67"' : 'data-target="#xs-components-links-module-FeedModule-ab9a114fe1f5285027f0fadf6d739a67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeedModule-ab9a114fe1f5285027f0fadf6d739a67"' :
                                            'id="xs-components-links-module-FeedModule-ab9a114fe1f5285027f0fadf6d739a67"' }>
                                            <li class="link">
                                                <a href="components/FeedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeedRoutingModule.html" data-type="entity-link">FeedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-bddd1a2c98afb3338c61bbe3110fec44"' : 'data-target="#xs-components-links-module-HomeModule-bddd1a2c98afb3338c61bbe3110fec44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-bddd1a2c98afb3338c61bbe3110fec44"' :
                                            'id="xs-components-links-module-HomeModule-bddd1a2c98afb3338c61bbe3110fec44"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomepageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManageModule.html" data-type="entity-link">ManageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManageModule-04fea8207db4681cf54a570fdda8fb66"' : 'data-target="#xs-components-links-module-ManageModule-04fea8207db4681cf54a570fdda8fb66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageModule-04fea8207db4681cf54a570fdda8fb66"' :
                                            'id="xs-components-links-module-ManageModule-04fea8207db4681cf54a570fdda8fb66"' }>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ManageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfiloComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfiloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageRoutingModule.html" data-type="entity-link">ManageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MemeModule.html" data-type="entity-link">MemeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' : 'data-target="#xs-components-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' :
                                            'id="xs-components-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' }>
                                            <li class="link">
                                                <a href="components/CardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemeDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemeItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemeListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemeListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' : 'data-target="#xs-directives-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' :
                                        'id="xs-directives-links-module-MemeModule-dbde03a7868756f562fd27f7bf774747"' }>
                                        <li class="link">
                                            <a href="directives/MemeItemDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemeItemDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MemeRoutingModule.html" data-type="entity-link">MemeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilterService.html" data-type="entity-link">FilterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MemeListService.html" data-type="entity-link">MemeListService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CanActivateGuard.html" data-type="entity-link">CanActivateGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanActivateLoginGuard.html" data-type="entity-link">CanActivateLoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateEditProfileGuard.html" data-type="entity-link">CanDeactivateEditProfileGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanLoadCompsGuard.html" data-type="entity-link">CanLoadCompsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanloadloginGuard.html" data-type="entity-link">CanloadloginGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EditFormInterface.html" data-type="entity-link">EditFormInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HidFavInterface.html" data-type="entity-link">HidFavInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MemeInterface.html" data-type="entity-link">MemeInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RegisterUserInterface.html" data-type="entity-link">RegisterUserInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserInterface.html" data-type="entity-link">UserInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});