export default function Footer() {
  return (
    <footer
      class="bg-gray-100 dark:bg-gray-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">
        Footer
      </h2>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8 xl:col-span-1">
            <a href="https://www.barkpass.com">
              <svg
                class="fill-current h-10 w-24 text-base"
                viewBox="0 0 288.213 100"
                fill="none"
                stroke-linecap="square"
                stroke-miterlimit="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <clipPath id="a">
                  <path d="M0 0h288.213v100H0V0z"></path>
                </clipPath>
                <g clip-path="url(#a)">
                  <path fill="none" d="M0 0h288.213v100H0z"></path>
                  <path
                    fill="none"
                    d="M-8.917-3.234H297.13v92.63H-8.917z"
                  ></path>
                  <path d="M23.895 67.597q-2.953 0-5.703-1.016-2.75-1.03-4.61-2.64l-1.656 3.265h-8.39l7.75-48.828h9.469l-2.625 16.64q2.171-1.155 4.703-1.858 2.53-.704 4.39-.704 5.047 0 7.922 3.141 2.89 3.125 2.89 8.89 0 2.11-.827 7.938-1.157 7.235-4.61 11.203-3.453 3.969-8.703 3.969zm-2.953-7.625q2.953 0 4.703-2.328 1.766-2.344 2.531-7.719.329-2.562.329-3.969 0-5.89-4.422-5.89-1.657 0-3.547.484-1.89.485-3.5 1.25L14.55 57.925q1.344 1.031 2.813 1.547 1.469.5 3.578.5zm30.278 7.625q-4.094 0-6.719-2.969-2.625-2.984-2.625-8.875 0-2.89.766-7.172 1.343-8.25 5.656-12.187 4.328-3.938 12.515-3.938 4.297 0 8.188 1.125 3.906 1.11 6.281 2.907l-4.86 30.718h-8.39l-.515-3.453q-1.594 1.407-4.579 2.625-2.968 1.219-5.718 1.219zm4.61-7.625q1.858 0 3.39-.64 1.531-.641 3.203-1.72l2.625-16.515q-.578-.39-1.89-.703-1.313-.328-2.845-.328-3.78 0-5.703 2.281-1.922 2.266-2.687 6.938-.516 3.203-.516 4.734 0 2.75 1.078 4.36 1.094 1.593 3.344 1.593zM82.7 32.832h8.453l.39 4.421q2.11-2.234 4.376-3.515 2.281-1.282 5.031-1.282 2.172 0 3.453.375l-1.468 9.485q-2.438-.14-3.97-.14-2.624 0-4.843.78-2.203.766-3.797 1.985l-3.531 22.265h-9.531L82.7 32.831zm29.129-14.454h9.468l-4.218 26.625q9.406-1.61 12.156-12.172h9.531q-3.266 11.657-11 15.813l9.016 18.562h-9.719L119.83 51.52q-2.172.578-3.907.578l-2.375 15.11h-9.468l7.75-48.829zm33.47 15.797q4.858-.828 8.858-1.265 4-.454 8.422-.454 6.016 0 8.672 3.016 2.656 3 2.656 9.266 0 2.89-.64 6.859-1.281 8-5.438 12-4.156 4-10.562 4-4.922 0-7.547-1.344l-2.563 16.125h-9.468l7.61-48.203zm10.874 25.344q3.453 0 5.313-2.266 1.859-2.265 2.75-7.453.328-2.75.328-3.453 0-3.203-1.094-4.734-1.078-1.547-3.516-1.547l-6.14.062-2.953 18.5q1.343.516 2.5.703 1.156.188 2.812.188zm31.045 8.078q-4.093 0-6.718-2.969-2.625-2.984-2.625-8.875 0-2.89.765-7.172 1.344-8.25 5.657-12.187 4.328-3.938 12.515-3.938 4.297 0 8.188 1.125 3.906 1.11 6.281 2.907l-4.86 30.718h-8.39l-.516-3.453q-1.593 1.407-4.578 2.625-2.969 1.219-5.719 1.219zm4.61-7.625q1.86 0 3.39-.64 1.532-.641 3.204-1.72l2.625-16.515q-.579-.39-1.891-.703-1.313-.328-2.844-.328-3.781 0-5.703 2.281-1.922 2.266-2.687 6.938-.516 3.203-.516 4.734 0 2.75 1.078 4.36 1.094 1.593 3.344 1.593zm35.013 7.625q-8.579 0-13.704-1.547l.891-5.562h14.984q3.579 0 4.032-2.5l.187-1.407.063-.765q0-1.922-2.688-1.922h-5.11q-4.484 0-7.14-1.719-2.656-1.734-2.656-5.25 0-1.547.25-2.89l.39-2.422q.766-4.36 4-6.75 3.235-2.407 10.141-2.407 3.016 0 6.813.454 3.812.437 6.312 1.14l-.969 5.578h-14.015q-1.86 0-2.688.61-.828.593-1.156 2.015l-.187.953q-.188.829-.188 1.344 0 .89.672 1.313.672.422 2.266.422h5.765q4.094 0 6.547 1.828 2.469 1.812 2.469 5.015 0 1.282-.188 2.75l-.437 3.016q-.719 4.594-4.438 6.656-3.703 2.047-10.218 2.047zm32.768 0q-8.579 0-13.704-1.547l.891-5.562h14.984q3.579 0 4.032-2.5L266 56.58l.063-.765q0-1.922-2.688-1.922h-5.11q-4.484 0-7.14-1.719-2.656-1.734-2.656-5.25 0-1.547.25-2.89l.39-2.422q.766-4.36 4-6.75 3.235-2.407 10.141-2.407 3.016 0 6.813.454 3.812.437 6.312 1.14l-.969 5.578h-14.015q-1.86 0-2.688.61-.828.593-1.156 2.015l-.187.953q-.188.829-.188 1.344 0 .89.672 1.313.672.422 2.266.422h5.765q4.094 0 6.547 1.828 2.469 1.812 2.469 5.015 0 1.282-.188 2.75l-.437 3.016q-.719 4.594-4.438 6.656-3.703 2.047-10.218 2.047z"></path>
                </g>
              </svg>
            </a>
            <p class="text-gray-500 dark:text-gray-300 text-base">
              Building a better future for pets and the people who care about
              them.
            </p>
            <div class="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/barkpass"
                class="text-gray-400 dark:text-gray-300 hover:text-gray-500"
              >
                <span class="sr-only">LinkedIn</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 76.624 65.326"
                >
                  <path
                    data-name="Path 2525"
                    d="M72.864 61.109a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
                  ></path>
                  <path
                    data-name="Path 2520"
                    d="M55.204 55.204h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM59.99.004H4.78a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.67A4.738 4.738 0 0059.99 0"
                  ></path>
                  <path
                    data-name="Path 2526"
                    d="M72.163 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"
                  ></path>
                </svg>
              </a>

              <a
                href="https://twitter.com/barkpass"
                class="text-gray-400 dark:text-gray-300 hover:text-gray-500"
              >
                <span class="sr-only">Twitter</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.barkpass.com/dog-park-management"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Dog Park Management
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.barkpass.com/pet-licensing"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Pet Licensing
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.barkpass.com/pricing"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://documentation.barkpass.com/"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://www.barkpass.com/about"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://building.barkpass.com"
                      target="_blank"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul class="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://admin.barkpass.com/privacy-policy"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://admin.barkpass.com/terms-of-service"
                      class="text-base text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8">
          <p class="text-base text-gray-400 xl:text-center">
            © 2021 Barkpass, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
