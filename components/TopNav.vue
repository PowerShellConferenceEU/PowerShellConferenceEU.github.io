<template>
<b-navbar toggleable="sm" type="dark" class="pt-4 pb-4">
  <b-navbar-brand class="navbar-brand p-0" href="/">
    <svg width="215px" alt="PSConfEu">
      <PowerShellLogo />
    </svg>
    <div class="d-none">PowerShell Conference Europe</div>
  </b-navbar-brand>

  <b-navbar-toggle target="navbarToggle"></b-navbar-toggle>

  <b-collapse is-nav class="collapse navbar-collapse justify-content-end" id="navbarToggle" >
      <b-navbar-nav> 
        <b-nav-item class="bg-black ml-2 p-2" to="/">Home</b-nav-item>
        <b-nav-item class="bg-black ml-2 p-2" href="http://powershell.video">Previous Talks</b-nav-item>
        <b-nav-item class="bg-black ml-2 p-2" to="/legal">Legal</b-nav-item>
      </b-navbar-nav>    
  </b-collapse>
</b-navbar>
</template>
