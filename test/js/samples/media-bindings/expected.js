/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	add_render_callback,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	raf,
	run_all,
	safe_not_equal,
	time_ranges_to_array
} from "svelte/internal";

function create_fragment(ctx) {
	let audio;
	let audio_updating = false;
	let audio_animationframe;
	let audio_is_paused = true;
	let dispose;

	function audio_timeupdate_handler() {
		cancelAnimationFrame(audio_animationframe);

		if (!audio.paused) {
			audio_animationframe = raf(audio_timeupdate_handler);
			audio_updating = true;
		}

		ctx[10].call(audio);
	}

	return {
		c() {
			audio = element("audio");
			if (ctx[2] === void 0 || ctx[3] === void 0 || ctx[9] === void 0) add_render_callback(audio_timeupdate_handler);
			if (ctx[4] === void 0) add_render_callback(() => ctx[11].call(audio));
			if (ctx[0] === void 0) add_render_callback(() => ctx[13].call(audio));
			if (ctx[0] === void 0 || ctx[1] === void 0) add_render_callback(() => ctx[14].call(audio));
			if (ctx[8] === void 0) add_render_callback(() => ctx[17].call(audio));
			if (ctx[9] === void 0) add_render_callback(() => ctx[18].call(audio));

			dispose = [
				listen(audio, "timeupdate", audio_timeupdate_handler),
				listen(audio, "durationchange", ctx[11]),
				listen(audio, "play", ctx[12]),
				listen(audio, "pause", ctx[12]),
				listen(audio, "progress", ctx[13]),
				listen(audio, "loadedmetadata", ctx[14]),
				listen(audio, "volumechange", ctx[15]),
				listen(audio, "ratechange", ctx[16]),
				listen(audio, "seeking", ctx[17]),
				listen(audio, "seeked", ctx[17]),
				listen(audio, "ended", ctx[18])
			];
		},
		m(target, anchor) {
			insert(target, audio, anchor);

			if (!isNaN(ctx[6])) {
				audio.volume = ctx[6];
			}

			if (!isNaN(ctx[7])) {
				audio.playbackRate = ctx[7];
			}
		},
		p(ctx, changed) {
			if (!audio_updating && changed & 8 && !isNaN(ctx[3])) {
				audio.currentTime = ctx[3];
			}

			if (changed & 32 && audio_is_paused !== (audio_is_paused = ctx[5])) {
				audio[audio_is_paused ? "pause" : "play"]();
			}

			if (changed & 64 && !isNaN(ctx[6])) {
				audio.volume = ctx[6];
			}

			if (changed & 128 && !isNaN(ctx[7])) {
				audio.playbackRate = ctx[7];
			}

			audio_updating = false;
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(audio);
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { buffered } = $$props;
	let { seekable } = $$props;
	let { played } = $$props;
	let { currentTime } = $$props;
	let { duration } = $$props;
	let { paused } = $$props;
	let { volume } = $$props;
	let { playbackRate } = $$props;
	let { seeking } = $$props;
	let { ended } = $$props;

	function audio_timeupdate_handler() {
		played = time_ranges_to_array(this.played);
		currentTime = this.currentTime;
		ended = this.ended;
		$$invalidate(2, played);
		$$invalidate(3, currentTime);
		$$invalidate(9, ended);
	}

	function audio_durationchange_handler() {
		duration = this.duration;
		$$invalidate(4, duration);
	}

	function audio_play_pause_handler() {
		paused = this.paused;
		$$invalidate(5, paused);
	}

	function audio_progress_handler() {
		buffered = time_ranges_to_array(this.buffered);
		$$invalidate(0, buffered);
	}

	function audio_loadedmetadata_handler() {
		buffered = time_ranges_to_array(this.buffered);
		seekable = time_ranges_to_array(this.seekable);
		$$invalidate(0, buffered);
		$$invalidate(1, seekable);
	}

	function audio_volumechange_handler() {
		volume = this.volume;
		$$invalidate(6, volume);
	}

	function audio_ratechange_handler() {
		playbackRate = this.playbackRate;
		$$invalidate(7, playbackRate);
	}

	function audio_seeking_seeked_handler() {
		seeking = this.seeking;
		$$invalidate(8, seeking);
	}

	function audio_ended_handler() {
		ended = this.ended;
		$$invalidate(9, ended);
	}

	$$self.$set = $$props => {
		if ("buffered" in $$props) $$invalidate(0, buffered = $$props.buffered);
		if ("seekable" in $$props) $$invalidate(1, seekable = $$props.seekable);
		if ("played" in $$props) $$invalidate(2, played = $$props.played);
		if ("currentTime" in $$props) $$invalidate(3, currentTime = $$props.currentTime);
		if ("duration" in $$props) $$invalidate(4, duration = $$props.duration);
		if ("paused" in $$props) $$invalidate(5, paused = $$props.paused);
		if ("volume" in $$props) $$invalidate(6, volume = $$props.volume);
		if ("playbackRate" in $$props) $$invalidate(7, playbackRate = $$props.playbackRate);
		if ("seeking" in $$props) $$invalidate(8, seeking = $$props.seeking);
		if ("ended" in $$props) $$invalidate(9, ended = $$props.ended);
	};

	return [
		buffered,
		seekable,
		played,
		currentTime,
		duration,
		paused,
		volume,
		playbackRate,
		seeking,
		ended,
		audio_timeupdate_handler,
		audio_durationchange_handler,
		audio_play_pause_handler,
		audio_progress_handler,
		audio_loadedmetadata_handler,
		audio_volumechange_handler,
		audio_ratechange_handler,
		audio_seeking_seeked_handler,
		audio_ended_handler
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			buffered: 0,
			seekable: 1,
			played: 2,
			currentTime: 3,
			duration: 4,
			paused: 5,
			volume: 6,
			playbackRate: 7,
			seeking: 8,
			ended: 9
		});
	}
}

export default Component;