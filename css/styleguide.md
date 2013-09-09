<p><strong>Welcome to the MindMixer styleguide.</strong> We use this to keep consistancy between our applications and websites. At MindMixer we use Sass stylesheets and in order to maintain our styles, you must have a general understanding of SCSS syntax.</p>

<h1>Coding Style:</h1>

<ul class="scores">
	<li>
		- Use soft-tabs with a two space indent.
	</li>
	<li>
		- Put spaces after : in property declarations.
	</li>
	<li>
		- Put spaces before { in rule declarations.
	</li>
	<li>
		- Use hex color codes #000 unless using rgba.
	</li>
	<li>
		- Because we are building our style guide from the dev.css file Use /\* \*/ for comment blocks (instead of //).
	</li>
	<li>
		- Document styles with KSS.
	</li>
</ul>

Here is a good example of syntax:
<div class="kss-markup">
<pre>
	<code class="rainbow">
	/\* This is a good example! \*/
	.styleguide-format {
	  border: 1px solid #0f0;
	  color: #000;
	  background: rgba(0,0,0,0.5);
	}
	</code>
</pre>
</div>

<h1>SCSS coding style</h1>
<p>Any `$varaible` or `@mixen` that is used more then once should be moved into the global section.</p>
<p>All exceptions to a set of rules need to be moved to the section `/* #Exceptions */` area of the `.scss` file.</p>
<p>All words in a class/id need to be separated with a - and not camelCase.</p>

<h1>File System</h1>

We have three main directories that handle our styles
<div class="kss-markup">
  <pre>
  <code>
  	
  &ndash; /css-application
    ∟ /\* This area is site based /\*
  &ndash; /css-framework
    ∟ /components
    ∟ /globals
    ∟ /themes
    ∟ /vendor
    ∟ base.scss
  &ndash; /mm-icons
    ∟ /fonts
    ∟ /icons
    ∟ package.json
  </code>
  </pre>
</div>

Within each of these directories are other files that handle styles based on sections and items on the site.

<h1>Pixels vs. Ems</h1>
