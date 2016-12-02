<?php

class ouTechnology extends ouPost {

    public static function friendlyNamePlural() {
        return 'Technologies';
    }

    public function permalink($leaveName = false) {
        $parentUrl = get_bloginfo('url') . '/technology/';
        return $parentUrl . $this->post_name . '/';
    }

    /**
     * @return string
     */
    public function name() {
        return $this->title();
    }

    /**
     * @param string $size
     * @param array $attrs
     * @return string
     */
    public function logoThumbnail($size = 'thumbnail', $attrs = array()) {
        return $this->featuredImage($size, $attrs);
    }

    /**
     * @param string $size
     * @param array $attrs
     * @return string
     */
    public function logoUrl($size = 'thumbnail', $attrs = array()) {
        if (!$this->logoThumbnail($size, $attrs)) {
            return 'http://placehold.it/300x150';
        }
        return $this->featuredImageUrl($size);
    }

    /**
     * @return ooWP_Query|ouCoOp[]
     */
    public function coOps() {
        return $this->connected(ouCoOp::postType(), false);
    }

}