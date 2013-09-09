We need to reduce some of the code in the file. We don't restate anything that is the same above, only overrides.
All words in a class/id need to be separated with a - and not camelCase.
The surrounding main div is to be set to an id. It is fine if the set id is the main selector for all static pages, it would serve us well.
We need to remove all the extra lines, unless it is a new root selector that is being styled.

<p>Welcome to the MindMixer styleguide. We use this to keep consistancy between our applications and websites. At MindMixer we use Sass stylesheets and in order to maintain our styles, you must have a general understanding of SCSS syntax.</p>

<strong>Coding Style:</strong>

<ul class="scores">
	<li>
		Use soft-tabs with a two space indent.
	</li>
	<li>
		Put spaces after : in property declarations.
	</li>
	<li>
		Put spaces before { in rule declarations.
	</li>
	<li>
		Use hex color codes #000 unless using rgba.
	</li>
	<li>
		Because we are building our style guide from the dev.css file Use /\* \*/ for comment blocks (instead of //).
	</li>
	<li>
		Document styles with KSS.
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
Any `$varaible` or `@mixen` that is used more then once should be moved into the global section.

All exceptions to a set of rules need to be moved to the section `/\* #Exceptions /\*` area of the `.scss` file.

We have three main directories that handle our styles
<div class="kss-markup">
	<pre>
	/css-application
		/\* This area is site based /\*
	/css-framework
		/components
			/buttons
			/forms
			/media
			/overlays
			_all.scss
			avatars.scss
			banners.scss
			buttons.scss
			forms.scss
			lists.scss
			loading.scss
			media.scss
			messages.scss
			navigation.scss
			overlays.scss
			popover.scss
			rate.scss
		/globals
	/mm-icons
	</pre>
</div>

